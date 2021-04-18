import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		// Header component
		header: {
			padding: theme.spacing(1.5),
			paddingLeft: 0,
			paddingRight: 0,
			[theme.breakpoints.up("md")]: {
				padding: 0,
			},
			[theme.breakpoints.up("lg")]: {
				padding: "0 3.5rem",
			},
		},
		btnTypo: {
			display: "none",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(1),
				display: "block",
			},
		},

		// App component
		gridSpacing: {
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
			marginLeft: 0,
			marginRight: 0,
			[theme.breakpoints.up("md")]: {
				marginTop: theme.spacing(3),
				marginBottom: theme.spacing(3),
			},
		},

		// Filter component
		filterGridII: {
			marginTop: theme.spacing(3),
			[theme.breakpoints.up("sm")]: {
				marginTop: 0,
			},
		},

		// Countries components
		cardMedia: {
			height: 200,
			[theme.breakpoints.up("sm")]: {
				height: 250,
			},
			[theme.breakpoints.up("md")]: {
				height: 200,
			},
		},
	})
);

export default useStyles;
