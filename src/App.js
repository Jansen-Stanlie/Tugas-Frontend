import React, { Component } from "react";

import Login from "./Login";
import Home from "./Home";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<Login />
				<Home />>
			</>
		);
	}
}

export default App;
