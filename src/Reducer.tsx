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
			};
		case "SEARCH":
			return {
				...state,
				modifiedData: state.originalData.filter(
					(data: any) => data.name === action.payload
				),
			};
		default:
			return state;
	}
};

export default Reducer;
