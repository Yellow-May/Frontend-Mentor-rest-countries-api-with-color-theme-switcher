import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import NightsStayIcon from "@material-ui/icons/NightsStay";

const Header = () => {
	const [darkMode, setDarkMode] = React.useState(false);

	return (
		<AppBar position='static' style={{ padding: "0 5%" }}>
			<Toolbar>
				<Typography variant='h5' style={{ flexGrow: 1 }}>
					Where in the world?
				</Typography>

				<Button
					color='inherit'
					onClick={() =>
						darkMode ? setDarkMode(false) : setDarkMode(true)
					}>
					{darkMode ? <Brightness4Icon /> : <NightsStayIcon />}
					<Typography style={{ marginLeft: "1rem" }}>
						{darkMode ? "Light Mode" : "Dark Mode"}
					</Typography>
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
