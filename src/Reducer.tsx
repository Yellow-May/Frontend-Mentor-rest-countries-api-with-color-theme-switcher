import { initialState } from "./store";

const Reducer = (
	state: typeof initialState,
	action: { type: string; payload?: any }
) => {
	switch (action.type) {
		case "STORE_FETCHED_DATA":
			return {
				...state,
				originalData: action.payload,
				modifiedData: action.payload,
				filteredData: action.payload,
			};

		case "SEARCH":
			if (action.payload.length === 0)
				return {
					...state,
					modifiedData: state.filteredData,
				};
			else
				return {
					...state,
					modifiedData: state.filteredData.filter(data => {
						let names = [
							...data.altSpellings,
							data.name,
							data.demonym,
							data.nativeName,
							data.capital,
						];
						let hasName: boolean = false;

						names.forEach((name: string) => {
							if (
								name
									.toUpperCase()
									.indexOf(action.payload.toUpperCase()) > -1
							)
								hasName = true;
						});

						return hasName;
					}),
				};

		case "FILTER":
			if (action.payload === "")
				return {
					...state,
					modifiedData: state.originalData,
					filteredData: state.originalData,
				};
			else
				return {
					...state,
					modifiedData: state.originalData.filter(
						data => data.region === action.payload
					),
					filteredData: state.originalData.filter(
						data => data.region === action.payload
					),
				};
		default:
			return state;
	}
};

export default Reducer;
