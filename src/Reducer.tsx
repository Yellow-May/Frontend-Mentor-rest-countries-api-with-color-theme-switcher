import { initialState } from "./store";

const Reducer = (
	storeState: typeof initialState,
	action: { type: string; payload?: any }
) => {
	switch (action.type) {
		case "STORE_FETCHED_DATA":
			return {
				...storeState,
				originalData: action.payload,
				modifiedData: action.payload,
				filteredData: action.payload,
			};

		case "SEARCH":
			if (action.payload.length === 0)
				return {
					...storeState,
					modifiedData: storeState.filteredData,
				};
			else
				return {
					...storeState,
					modifiedData: storeState.filteredData.filter(data => {
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
			if (action.payload.length === 0)
				return {
					...storeState,
					modifiedData: storeState.originalData,
					filteredData: storeState.originalData,
				};
			else
				return {
					...storeState,
					modifiedData: storeState.originalData.filter(
						data => data.region === action.payload
					),
					filteredData: storeState.originalData.filter(
						data => data.region === action.payload
					),
				};

		case "COUNTRY":
			return {
				...storeState,
				country: action.payload,
			};

		default:
			return storeState;
	}
};

export default Reducer;
