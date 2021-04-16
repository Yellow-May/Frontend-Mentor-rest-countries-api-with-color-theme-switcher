import React from "react";
import Reducer from "./Reducer";

export const initialState = {
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
	const [state] = React.useReducer(Reducer, initialState);

	const events = {};

	return (
		<AppStore.Provider value={{ state, events }}>
			{children}
		</AppStore.Provider>
	);
};
