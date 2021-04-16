import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
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
		gridSpacing: {
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
			[theme.breakpoints.up("md")]: {
				marginTop: theme.spacing(3),
				marginBottom: theme.spacing(3),
			},
		},
		filterGridII: {
			marginTop: theme.spacing(3),
			[theme.breakpoints.up("sm")]: {
				marginTop: 0,
			},
		},
	})
);

export default useStyles;
