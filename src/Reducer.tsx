import { initialState } from "./store";

const Reducer = (state: typeof initialState, action: { type: string }) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default Reducer;
