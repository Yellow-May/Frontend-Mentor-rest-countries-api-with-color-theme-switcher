import React from "react";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./../useStyles";

const filterBy = ["Africa", "America", "Asia", "Europe", "Oceanic"];

const Filters = () => {
	const classes = useStyles();

	const [age, setAge] = React.useState("");

	const [amount, setAmount] = React.useState("");

	const handleChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAmount(event.target.value as string);
	};

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string);
	};

	return (
		<>
			<Grid item xs={12} sm={5} md={4}>
				<FormControl fullWidth variant='outlined'>
					<InputLabel htmlFor='outlined-adornment-amount'>
						Search
					</InputLabel>
					<OutlinedInput
						id='outlined-adornment-amount'
						value={amount}
						onChange={handleChange2}
						startAdornment={
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						}
						labelWidth={60}
					/>
				</FormControl>
			</Grid>

			<Grid item sm />

			<Grid item xs={6} sm={3} md={2} className={classes.filterGridII}>
				<FormControl variant='outlined' style={{ width: "100%" }}>
					<InputLabel id='demo-simple-select-outlined-label'>
						Filter by Region
					</InputLabel>
					<Select
						labelId='demo-simple-select-outlined-label'
						id='demo-simple-select-outlined'
						value={age}
						onChange={handleChange}
						label='Filter by Region'>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						{filterBy.map(e => (
							<MenuItem key={e} value={e}>
								{e}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
		</>
	);
};

export default Filters;
