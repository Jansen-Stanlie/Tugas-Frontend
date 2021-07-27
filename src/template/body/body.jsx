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
					};
				});
				console.log("JSONDATA:", dataArr);
				this.setState({
					users: dataArr,
				});
			});
	}
	onChangePage = () => {
		const { loginStatus, page, setStatus, setNavs, setUser, userNew } =
			this.props;
		if (page === "About")
			return <About userNow={userNew} dataUser={this.state.users} />;
		if (page === "Home")
			return (
				<Home
					statusLogin={loginStatus}
					setStatus={setStatus}
					dataUser={this.state.users}
					setNav={setNavs}
					setUser={setUser}
				/>
			);
		if (page === "Register")
			return <Register dataUser={this.state.users} setStatus={setStatus} />;
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
