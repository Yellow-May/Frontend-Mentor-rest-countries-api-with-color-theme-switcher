import React from "react";
import Reducer from "./Reducer";

export const initialState: {
	originalData: any[];
	modifiedData: any[];
	country: {};
} = {
	originalData: [],
	modifiedData: [],
	country: {},
};

export const AppStore = React.createContext(
	{} as {
		state: typeof initialState;
		events: any;
	}
);

export const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(Reducer, initialState);

	const storeFetchedData = (payload: []) =>
		dispatch({ type: "STORE_FETCHED_DATA", payload });

	const search = (payload: string) => dispatch({ type: "SEARCH", payload });

	const events = {
		storeFetchedData,
		search,
	};

	return (
		<AppStore.Provider value={{ state, events }}>
			{children}
		</AppStore.Provider>
	);
};
