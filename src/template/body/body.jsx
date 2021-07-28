import React, { Component, Fragment } from "react";
import { About, Home } from "../../page/page";
import Register from "../../page/register/register";

import "./body.css";

class Body extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};
	}

	componentDidMount() {
		const urlFetch = fetch("https://jsonplaceholder.typicode.com/users");
		urlFetch
			.then((res) => {
				if (res.status === 200) return res.json();
			})
			.then((resJson) => {
				const dataRes = resJson;

				const dataArr = dataRes.map((data, index) => {
					return {
						name: data.name,
						username: data.username,
						password: "12345",
						address: data.address.city,
						email: data.email,
					};
				});
				console.log("JSONDATA:", dataArr);
				this.setState({
					users: dataArr,
				});
			});
	}
	changeUserListNew = (user) => {
		this.setState({
			users: user,
		});
	};
	onChangePage = () => {
		const {
			loginStatus,
			page,
			setStatus,
			setNavs,
			setUser,
			userNew,
			sendID,
			setTitle,
			changeStatus,
			changeTitle,
			status,
			tombol,
			changeTombol,
			sendNewID,
		} = this.props;
		if (page === "About")
			return (
				<About
					userNow={userNew}
					dataUser={this.state.users}
					sendID={sendID}
					setTitle={changeTitle}
					setStatus={setStatus}
					statusLogin={loginStatus}
					setStatusEdit={changeStatus}
				/>
			);
		if (page === "Home")
			return (
				<Home
					statusLogin={loginStatus}
					setStatus={setStatus}
					dataUser={this.state.users}
					setNav={setNavs}
					setUser={setUser}
					changeTombol={changeTombol}
				/>
			);
		if (page === "Register")
			return (
				<Register
					statusLogin={loginStatus}
					dataUser={this.state.users}
					setStatus={setStatus}
					setNav={setNavs}
					setStatusNow={status}
					setTitle={setTitle}
					tombol={tombol}
					sendID={sendNewID}
					changeUser={this.changeUserListNew}
					setUser={setUser}
				/>
			);
	};
	render() {
		return (
			<Fragment>
				<div id="hero">{this.onChangePage()}</div>
			</Fragment>
		);
	}
}

export default Body;
