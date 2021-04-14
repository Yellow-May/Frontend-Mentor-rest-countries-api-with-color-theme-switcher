import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		header: {
			padding: theme.spacing(1.5),
			paddingLeft: 0,
			paddingRight: 0,
			[theme.breakpoints.up("md")]: {
				padding: "0 2.5%",
			},
			[theme.breakpoints.up("lg")]: {
				padding: "0 4%",
			},
		},
	})
);

export default useStyles;
