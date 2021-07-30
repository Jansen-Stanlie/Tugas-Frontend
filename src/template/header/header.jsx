import React, { Component, Fragment } from "react";
import "./header.css";
import SweetAlert from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navLog: "Login",
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
			this.props.setNavchange("LogOut");
		}
		this.props.setStatus(loginStatus, e.target.value);
		console.log(e.target.value);
		console.log(loginStatus);
	};
	logOutCheck = (e) => {
		const { setNav } = this.props;
		if (setNav === "LogOut") {
			this.props.setStatus(false, "Home");
			this.props.setNavchange("Login");
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
		const styles = {
			button: {
				marginRight: 14,
				paddingLeft: 20,
				paddingRight: 20,
				borderRadius: 10,
			},
			btnText: {
				color: "Black",
				fontSize: 20,
				justifyContent: "center",
				textAlign: "center",
			},
		};
		return (
			<Fragment>
				<div className="container-button">
					<nav>
						<Button
							style={styles.button}
							variant="primary"
							type="button"
							value="Login"
							onClick={(e) => {
								this.loginStatusCheck(e);
								this.logOutCheck(e);
							}}
						>
							{setNav}
						</Button>
						<Button
							style={styles.button}
							className="JSON"
							type="button"
							value="Home"
							onClick={(e) => {
								this.loginStatusCheck(e);
							}}
						>
							{this.state.navHome}
						</Button>
						<Button
							style={styles.button}
							onClick={(e) => this.loginStatusCheck(e)}
							className="JSON"
							value="About"
							type="button"
						>
							{this.state.navAbout}
						</Button>
					</nav>
				</div>
			</Fragment>
		);
	}
}

export default Navbar;
