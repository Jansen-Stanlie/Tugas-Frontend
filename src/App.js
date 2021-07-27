import React, { Component } from "react";
import Body from "./template/body/body";
import Navbar from "./template/header/header";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: "Home",
			statusLogin: false,
			navName: "Home",
			UserLog: "",
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
	changeUserLog = (user) => {
		this.setState({
			UserLog: user,
		});
	};
	render() {
		console.log(this.state.currentPage);
		console.log(this.state.navName);
		console.log(this.state.UserLog);
		return (
			<>
				<Navbar
					loginStatus={this.state.statusLogin}
					page={this.state.currentPage}
					setStatus={this.changeStatus}
					setNav={this.state.navName}
					setNavchange={this.changeNavName}
				/>
				<Body
					loginStatus={this.state.statusLogin}
					page={this.state.currentPage}
					setStatus={this.changeStatus}
					setNavs={this.changeNavName}
					setUser={this.changeUserLog}
					userNew={this.state.UserLog}
				/>
			</>
		);
	}
}

export default App;
