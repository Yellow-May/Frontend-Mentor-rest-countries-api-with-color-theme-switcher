import React from "react";
import Typography from "@material-ui/core/Typography";

const Typo1 = (props: { txt1: string; txt2: string | number }) => {
	return (
		<Typography component='div' style={{ marginBottom: 5 }}>
			<Typography variant='body1' component='span'>
				{props.txt1}:
			</Typography>
			<Typography color='textSecondary' variant='body2' component='span'>
				{" " + props.txt2}
			</Typography>
		</Typography>
	);
};

export default Typo1;
