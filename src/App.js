import React, { Component } from "react";
import "./App.css";
import Body from "./template/body/body";
import Navbar from "./template/header/header";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: "Home",
			statusLogin: true,
			navName: "Login",
		};
	}
	changeStatus = (status, page) => {
		this.setState({
			currentPage: page,
			statusLogin: status,
		});
	};
	changeNavName = (name) => {
		this.setState({
			navName: name,
		});
	};
	render() {
		return (
			<>
				<header>
					<Navbar
						loginStatus={this.state.statusLogin}
						page={this.state.currentPage}
						setStatus={this.changeStatus}
						setNav={this.state.navName}
						setNavchange={this.changeNavName}
					/>
				</header>

				<Body
					loginStatus={this.state.statusLogin}
					page={this.state.currentPage}
				/>
			</>
		);
	}
}

export default App;
