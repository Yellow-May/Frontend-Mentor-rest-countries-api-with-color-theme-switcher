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
import { AppStore } from "./../store";

const filterBy = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filters = () => {
	const classes = useStyles();

	const { events } = React.useContext(AppStore);

	const [formData, setFormData] = React.useState({
		searchBy: "",
		filterBy: "All",
	});

	const handleChange = (
		event: React.ChangeEvent<{ value: unknown; name?: string }>
	) => {
		setFormData((prevData: typeof formData) => {
			return {
				...prevData,
				[event.target.name as string]: event.target.value as string,
			};
		});
		if (event.target.name === "searchBy")
			events.search(event.target.value as string);
		if (event.target.name === "filterBy") {
			events.filter(event.target.value as string);
			setFormData((prevData: typeof formData) => {
				return { ...prevData, searchBy: "" };
			});
		}
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
						name='searchBy'
						value={formData.searchBy}
						onChange={handleChange}
						startAdornment={
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						}
						labelWidth={60}
						autoComplete='off'
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
						name='filterBy'
						value={formData.filterBy}
						onChange={handleChange}
						label='Filter by Region'>
						<MenuItem value='All'>
							<em>All</em>
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
