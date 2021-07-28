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
			id: "",
			title: "Register New User",
			statusEdit: "No Edit",
			tombol: "Register",
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
	changeIDedit = (id) => {
		this.setState({
			id: id,
		});
	};
	changetitle = (title) => {
		this.setState({
			title: title,
		});
	};
	changeStatusEdit = (status) => {
		this.setState({
			statusEdit: status,
		});
	};
	changeTombol = (eNew) => {
		this.setState({
			tombol: eNew,
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
					changeStatus={this.changeStatusEdit}
					changeTitle={this.changetitle}
					changeTombol={this.changeTombol}
				/>
				<Body
					loginStatus={this.state.statusLogin}
					page={this.state.currentPage}
					setStatus={this.changeStatus}
					status={this.state.statusEdit}
					setNavs={this.changeNavName}
					setUser={this.changeUserLog}
					userNew={this.state.UserLog}
					sendID={this.changeIDedit}
					sendNewID={this.state.id}
					changeStatus={this.changeStatusEdit}
					setTitle={this.state.title}
					changeTitle={this.changetitle}
					changeTombol={this.changeTombol}
					tombol={this.state.tombol}
				/>
			</>
		);
	}
}

export default App;
