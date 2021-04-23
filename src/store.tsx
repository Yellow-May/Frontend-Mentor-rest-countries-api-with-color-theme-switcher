import React from "react";
import Reducer from "./Reducer";

export const initialState: {
	originalData: any[];
	modifiedData: any[];
	filteredData: any[];
	country: any;
} = {
	originalData: [],
	modifiedData: [],
	filteredData: [],
	country: {},
};

export const AppStore = React.createContext(
	{} as {
		storeState: typeof initialState;
		events: any;
	}
);

export const AppProvider: React.FC = ({ children }) => {
	const [storeState, dispatch] = React.useReducer(Reducer, initialState);

	const storeFetchedData = (payload: []) =>
		dispatch({ type: "STORE_FETCHED_DATA", payload });

	const search = (payload: string) => dispatch({ type: "SEARCH", payload });

	const filter = (payload: string) => dispatch({ type: "FILTER", payload });

	const country = (payload: {}) => dispatch({ type: "COUNTRY", payload });

	const events = {
		storeFetchedData,
		search,
		filter,
		country,
	};

	return (
		<AppStore.Provider value={{ storeState, events }}>
			{children}
		</AppStore.Provider>
	);
};
