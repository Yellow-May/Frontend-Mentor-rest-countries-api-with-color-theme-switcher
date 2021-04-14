import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import useStyles from "./../useStyles";

const Header = () => {
	const [darkMode, setDarkMode] = React.useState(false);

	const classes = useStyles();

	return (
		<AppBar
			position='static'
			color='default'
			elevation={1}
			className={classes.header}>
			<Toolbar>
				<Typography
					variant='h5'
					style={{
						flexGrow: 1,
						fontWeight: 700,
						letterSpacing: "0.1rem",
					}}>
					Where in the world?
				</Typography>

				<Button
					color='inherit'
					onClick={() =>
						darkMode ? setDarkMode(false) : setDarkMode(true)
					}>
					{darkMode ? <Brightness4Icon /> : <NightsStayIcon />}
					<Typography variant='button' style={{ marginLeft: "1rem" }}>
						{darkMode ? "Light Mode" : "Dark Mode"}
					</Typography>
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
