import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
	unstable_createMuiStrictModeTheme as createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Countries from "./components/Countries";
import Country from "./components/Country";

import useStyles from "./useStyles";
import { AppStore } from "./store";

const themeType = (dark: boolean) =>
	createMuiTheme({
		palette: {
			type: dark ? "dark" : "light",
		},
	});

function App() {
	const [dark, setDark] = React.useState(false);

	const { events } = React.useContext(AppStore);

	// Use system's dark or light mode settings
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	React.useEffect(() => setDark(prefersDarkMode), [prefersDarkMode]);

	React.useEffect(() => {
		fetch("https://restcountries.eu/rest/v2/all")
			.then(res => res.json())
			.then(data => events.storeFetchedData(data))
			.catch(err =>
				alert(
					err +
						" please check your connection and reload your browser"
				)
			);
	}, []);

	const theme = responsiveFontSizes(themeType(dark));

	const classes = useStyles();

	const changeTheme = () => setDark(!dark);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<Paper elevation={0} square={true}>
					<Header event={changeTheme} dark={dark} />
					<Switch>
						<Route
							exact
							path='/'
							render={() => (
								<Container>
									<Grid
										container
										style={{ padding: "2rem 0" }}>
										<Grid
											item
											container
											xs={12}
											className={classes.gridSpacing}>
											<Filters />
										</Grid>
										<Grid
											item
											container
											xs={12}
											spacing={6}
											className={classes.gridSpacing}>
											<Countries />
										</Grid>
									</Grid>
								</Container>
							)}
						/>
						<Route path='/:name' component={Country} />
					</Switch>
				</Paper>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
