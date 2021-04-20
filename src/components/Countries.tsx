import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import useStyles from "./../useStyles";
import { AppStore } from "./../store";

const Countries = () => {
	const { state } = React.useContext(AppStore);

	const classes = useStyles();

	const { push } = useHistory();

	return (
		<>
			{state.modifiedData.map((data, index) => (
				<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
					<Card onClick={() => push(`/${data.name}`)}>
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
								<Typography
									component='div'
									style={{ marginBottom: 5 }}>
									<Typography
										variant='body1'
										component='span'>
										Population:
									</Typography>
									<Typography
										color='textSecondary'
										variant='body2'
										component='span'>
										{" " +
											parseInt(
												data.population
											).toLocaleString()}
									</Typography>
								</Typography>
								<Typography
									component='div'
									style={{ marginBottom: 5 }}>
									<Typography
										variant='body1'
										component='span'>
										Region:
									</Typography>
									<Typography
										color='textSecondary'
										variant='body2'
										component='span'>
										{" " + data.region}
									</Typography>
								</Typography>
								<Typography component='div'>
									<Typography
										variant='body1'
										component='span'>
										Capital:
									</Typography>
									<Typography
										color='textSecondary'
										variant='body2'
										component='span'>
										{" " + data.capital}
									</Typography>
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			))}
		</>
	);
};

export default Countries;
