import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<AppProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</AppProvider>,
	document.getElementById("root")
);

reportWebVitals();
