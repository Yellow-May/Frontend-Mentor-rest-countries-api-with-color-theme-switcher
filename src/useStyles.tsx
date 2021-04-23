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

		// Countries component
		cardMedia: {
			height: 200,
			[theme.breakpoints.up("sm")]: {
				height: 250,
			},
			[theme.breakpoints.up("md")]: {
				height: 200,
			},
		},

		// Country component
		countryContainer: {
			minHeight: "90vh",
			paddingTop: "2rem",
			paddingBottom: "2rem",
			[theme.breakpoints.up("sm")]: {
				paddingTop: "3rem",
				paddingBottom: "3rem",
			},
			[theme.breakpoints.up("md")]: {
				paddingTop: "4rem",
				paddingBottom: "4rem",
			},
		},
		countryGridContainer: {
			marginTop: "2rem",
			[theme.breakpoints.up("sm")]: {
				marginTop: "3rem",
			},
			[theme.breakpoints.up("md")]: {
				marginTop: "4rem",
			},
		},
		countryFlag: {
			width: "100%",
		},
		countryGridSectionII: {
			paddingLeft: 0,
			paddingTop: "10%",
			[theme.breakpoints.up("sm")]: {
				paddingLeft: "5%",
				paddingTop: 0,
			},
			[theme.breakpoints.up("md")]: {
				paddingLeft: "10%",
			},
		},
		countryGridBorderText: {
			display: "block",
			[theme.breakpoints.up("sm")]: {
				display: "inline-block",
			},
		},
		btnTxt: {
			...theme.typography.button,
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(1),
			marginRight: theme.spacing(1),
		},
	})
);

export default useStyles;
