import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import useStyles from "./../useStyles";

const Header = (props: { event: () => void; dark: boolean }) => {
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

				<Button color='inherit' onClick={() => props.event()}>
					{props.dark ? <Brightness7Icon /> : <NightsStayIcon />}
					<Typography variant='button' className={classes.btnTypo}>
						{props.dark ? "Light Mode" : "Dark Mode"}
					</Typography>
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
