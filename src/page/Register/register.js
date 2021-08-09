import React, { Component } from "react";
import { RowInput } from "../../component/component";
import "./register.css";
import SweetAlert from "sweetalert2";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import User from "../../services/User";
class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			Checkpassword: "",
			user: [],
			redirect: false,
		};
	}
	handleChange = (event) => {
		const { name, value } = event.target;
		console.log("nama", name);
		this.setState({
			[name]: value,
		});
	};
	onCheckRegister = (event) => {
		event.preventDefault();
		const { userList } = this.props;
		console.log(userList);
		console.log("this.state.username", this.state.username);
		console.log("this.state.Check", this.state.Checkpassword);
		if (this.state.username === "" || this.state.password === "") {
			return SweetAlert.fire("Warning", "Fill the blank Space", "error");
		}
		if (/\s/.test(this.state.password)) {
			return SweetAlert.fire(
				"Warning",
				"Password Cannot Contain white Space",
				"error"
			);
		}
		for (let index = 0; index < userList.length; index++) {
			if (this.state.username === userList[index].username) {
				return SweetAlert.fire(
					"Warning",
					` user with email: ${userList[index].username} already exist`,
					"error"
				);
			}
		}
		const re =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
		const rp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
		if (this.state.password !== this.state.Checkpassword) {
			return SweetAlert.fire(
				"Warning",
				"Check Again or Retype your password",
				"error"
			);
		} else if (!re.test(this.state.username)) {
			return SweetAlert.fire(
				"Warning",
				"Please Use correct format for email",
				"error"
			);
		} else if (!rp.test(this.state.password)) {
			return SweetAlert.fire(
				"Warning",
				"Please Use correct format for Password",
				"error"
			);
		}

		SweetAlert.fire(
			"SUCCESS REGISTER",
			` Succes Register for ${this.state.username}`,
			"success"
		);
		const userbaru = {
			username: this.state.username,
			password: this.state.password,
		};
		User.createUser(userbaru);
		return this.setState({
			redirect: true,
		});
	};
	render() {
		const { username, password, Checkpassword } = this.state;
		if (this.state.redirect) return <Redirect to="/login" />;
		return (
			<>
				<div className="container" id="container">
					<div className="form-container sign-in-container">
						<form onSubmit={this.onCheckRegister}>
							<h1>Sign UP</h1>
							<div className="social-container"></div>
							<RowInput
								name="username"
								typeInput=""
								placeholder="Email"
								nameInput="username"
								value={username}
								onChange={this.handleChange}
							/>
							<RowInput
								name="password"
								typeInput="password"
								placeholder="Password"
								nameInput="password"
								value={password}
								onChange={this.handleChange}
							/>
							<RowInput
								name="Checkpassword"
								typeInput="password"
								placeholder="Checkpassword"
								nameInput="Checkpassword"
								value={Checkpassword}
								onChange={this.handleChange}
							/>
							<button type="submit">Sign Up</button>
						</form>
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-right">
								<h1>Hello, Friend!</h1>
								<p>
									Selamat Datang diwebsite Hotel Terbaik se-Indonesia Silahkan
									Register Terlebih Dahulu
								</p>
							</div>
						</div>
					</div>
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
	Register: (user) => dispatch({ type: "register" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
