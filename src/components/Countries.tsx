import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Typo1 from "./reuseables/Typo1";

import useStyles from "./../useStyles";
import { AppStore } from "./../store";

const Countries = () => {
	const { storeState } = React.useContext(AppStore);

	const classes = useStyles();

	const { push } = useHistory();

	return (
		<>
			{storeState.modifiedData.map((data, index) => (
				<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
					<Card onClick={() => push(`/${data.name}`, data)}>
						<CardActionArea>
							<CardMedia
								className={classes.cardMedia}
								image={data.flag}
								title='Country Flag'
							/>
							<CardContent>
								<Typography
									variant='h6'
									style={{ marginBottom: 15 }}>
									{data.name}
								</Typography>
								<Typo1
									txt1='Population'
									txt2={parseInt(
										data.population
									).toLocaleString()}
								/>
								<Typo1 txt1='Region' txt2={data.region} />
								<Typo1 txt1='Capital' txt2={data.capital} />
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			))}
		</>
	);
};

export default Countries;
