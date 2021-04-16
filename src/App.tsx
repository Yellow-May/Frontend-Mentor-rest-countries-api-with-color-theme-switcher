import React from "react";
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

import useStyles from "./useStyles";

const themeType = (dark: boolean) =>
	createMuiTheme({
		palette: {
			type: dark ? "dark" : "light",
		},
	});

function App() {
	const [dark, setDark] = React.useState(false);

	// Use system's dark or light mode settings
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	React.useEffect(() => setDark(prefersDarkMode), [prefersDarkMode]);

	const theme = responsiveFontSizes(themeType(dark));

	const classes = useStyles();

	const changeTheme = () => setDark(!dark);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Paper elevation={0} square={true}>
				<Header event={changeTheme} dark={dark} />
				<Container>
					<Grid container style={{ padding: "2rem 0" }}>
						<Grid
							item
							container
							xs={12}
							className={classes.gridSpacing}>
							<Filters />
						</Grid>
						<Grid item xs={12} className={classes.gridSpacing}>
							<Countries />
						</Grid>
					</Grid>
				</Container>
			</Paper>
		</ThemeProvider>
	);
}

export default App;
