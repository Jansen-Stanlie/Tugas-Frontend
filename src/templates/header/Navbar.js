import React, { Component } from "react";
import { Nav } from "../../component/component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userLists: "",
		};
	}
	logOutUser = () => {
		const { userList } = this.props;
		this.props.loginOut(userList);
	};
	checkStatus = () => {
		const { status } = this.props;
		if (status) {
			return (
				<>
					<Link to="/home">
						<Nav>Home</Nav>
					</Link>
					<Link to="/login">
						<div className={`menu-item`} onClick={() => this.logOutUser()}>
							LogOut
						</div>
					</Link>
					<Link to="/data">
						<Nav>Data</Nav>
					</Link>
				</>
			);
		}
		return (
			<>
				<Link to="/home">
					<Nav>Home</Nav>
				</Link>
				<Link to="/login">
					<Nav>Login</Nav>
				</Link>
				<Link to="/register">
					<Nav>Register</Nav>
				</Link>
			</>
		);
	};
	render() {
		return (
			<>
				<div className="nav-container">
					<div className="logo">logo</div>
					<div className="menu">{this.checkStatus()}</div>
				</div>
			</>
		);
	}
}
const mapStateToProps = (state) => ({
	userList: state.Auth.user,
	status: state.Auth.statuslogin,
});
const mapDispatchToProps = (dispatch) => ({
	loginOut: (user) => dispatch({ type: "LOGOUT", payload: { user } }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
