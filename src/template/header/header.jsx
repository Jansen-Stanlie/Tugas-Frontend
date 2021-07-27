import React, { Component, Fragment } from "react";
import "./header.css";
import SweetAlert from "sweetalert2";
class header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navReg: "Register",
			navHome: "Home",
			navAbout: "About",
		};
	}

	loginStatusCheck = (e) => {
		const { loginStatus } = this.props;
		if (e.target.value === "About" && loginStatus === false) {
			return SweetAlert.fire("INFO!", "Login Terlebih Dahulu", "info");
		} else if (e.target.value === "About" && loginStatus === true) {
			this.props.setStatus(true, e.target.value);
			this.setState({
				navHome: "LogOut",
			});
		} else if (e.target.value === "Register" && loginStatus === true) {
			return SweetAlert.fire(
				"Warning",
				"LogOut Terlebih Dahulu sebelum register user baru",
				"error"
			);
		}
		this.props.setStatus(loginStatus, e.target.value);
		console.log(e.target.value);
		console.log(loginStatus);
	};
	logOutCheck = (e) => {
		const { setNav } = this.props;
		if (setNav === "LogOut") {
			this.props.setStatus(false, "Home");
			this.props.setNavchange("Home");
			// this.setState({
			// 	navHome: "Home",
			// });
		}
		return this.props.setStatus(false, e.target.value);
	};
	changeNav = (nav) => {
		this.setState({
			navHome: nav,
		});
		return this.state.navHome;
	};
	render() {
		const { setNav } = this.props;
		return (
			<Fragment>
				<div className="navbar">
					<img
						src={process.env.PUBLIC_URL + "/logo.png"}
						className="logo"
						alt=""
					/>
					<div className="user">
						<button
							type="button"
							value="Register"
							onClick={(e) => this.loginStatusCheck(e)}
						>
							{this.state.navReg}
						</button>
						<button
							className="JSON"
							type="button"
							value="Home"
							onClick={(e) => {
								this.loginStatusCheck(e);
								this.logOutCheck(e);
							}}
						>
							{setNav}
						</button>
						<button
							onClick={(e) => this.loginStatusCheck(e)}
							className="JSON"
							value="About"
							type="button"
						>
							{this.state.navAbout}
						</button>
						<img src={process.env.PUBLIC_URL + "/User.jpg"} alt="" />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default header;
