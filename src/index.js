import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AllReducers from "./reducers";
import App from "./App";
import Firebase, { FirebaseContext } from "./config/firebase";
const store = createStore(
	AllReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<FirebaseContext.Provider value={new Firebase()}>
				<App />
			</FirebaseContext.Provider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
