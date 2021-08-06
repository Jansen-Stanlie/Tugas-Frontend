import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Data, Home, Login, Register } from "../../page/page";
import User from "../../services/User";
class Body extends Component {
	constructor(props) {
		super(props);
		this.state = { userData: [] };
	}
	componentDidMount() {
		User.getUsers().then((res) => {
			console.log("res data", res.data);
			for (let index = 0; index < res.data.length; index++) {
				this.props.renderData(res.data[index]);
			}
		});
	}
	render() {
		console.log("State", this.state.userData);
		return (
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/data">
					<Data />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	renderData: (user) => dispatch({ type: "renderData", payload: { user } }),
});

export default connect(null, mapDispatchToProps)(Body);
