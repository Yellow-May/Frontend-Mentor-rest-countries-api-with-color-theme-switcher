import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useStyles from "./../useStyles";
import Typo1 from "./reuseables/Typo1";

import { AppStore } from "./../store";

const Country = () => {
	const { state } = useLocation();

	const { storeState, events } = React.useContext(AppStore);

	React.useEffect(
		() => events.country(state),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const classes = useStyles();

	return (
		<Container className={classes.countryContainer}>
			<Button
				variant='outlined'
				color='inherit'
				component={Link}
				to='/'
				style={{
					width: "7rem",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<ArrowBackIcon />
				<Typography variant='button'>Back</Typography>
			</Button>

			<Grid container className={classes.countryGridContainer}>
				<Grid item xs={12} sm={5}>
					<img
						src={storeState.country.flag}
						alt='Country flag'
						style={{ width: "100%", border: "thin solid" }}
					/>
				</Grid>

				<Grid
					item
					container
					spacing={4}
					xs={12}
					sm={7}
					className={classes.countryGridSectionII}>
					<Grid item xs={12}>
						<Typography variant='h4'>
							{storeState.country.name}
						</Typography>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Typo1
							txt1='Native Name'
							txt2={storeState.country.nativeName}
						/>
						<Typo1
							txt1='Population'
							txt2={parseInt(
								storeState.country.population
							).toLocaleString()}
						/>
						<Typo1 txt1='Region' txt2={storeState.country.region} />
						<Typo1
							txt1='Sub Region'
							txt2={storeState.country.subregion}
						/>
						<Typo1
							txt1='Capital'
							txt2={storeState.country.capital}
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Typo1
							txt1='Top Level Domain'
							txt2={
								storeState.country.topLevelDomain === undefined
									? ""
									: storeState.country.topLevelDomain[0]
							}
						/>
						<Typo1
							txt1='Currencies'
							txt2={
								storeState.country.currencies === undefined
									? ""
									: storeState.country.currencies[0].name
							}
						/>
						<Typo1
							txt1='Languages'
							txt2={
								storeState.country.languages === undefined
									? ""
									: storeState.country.languages
											.map((e: any) => e.name)
											.join(", ")
							}
						/>
					</Grid>

					<Grid item xs={12}>
						<Typography
							variant='body1'
							component='span'
							className={classes.countryGridBorderText}>
							Border Countries:
						</Typography>{" "}
						{storeState.country.borders === undefined
							? ""
							: storeState.country.borders.map((e: string) => (
									<Button
										variant='outlined'
										key={e}
										style={{ margin: "0 0.5rem 0.5rem 0" }}>
										{e}
									</Button>
							  ))}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Country;
