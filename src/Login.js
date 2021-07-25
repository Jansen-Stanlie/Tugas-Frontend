import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class Login extends Component {
	constructor(props) {
		super(props);
		this.onClickLogin = this.onClickLogin.bind(this);
		this.state = {
			username: "jansenstan455@gmail.com",
			password: "stanlie",
		};
	}
	onClickLogin = (e) => {
		let password = this.userPass;
		let username = this.userlog;

		if (
			password.value === this.state.password &&
			username.value === this.state.username
		) {
			alert("login success");
		} else {
			alert("login gagal");
		}
		console.log("ini password", password.value);
		// console.log("ini Username", username);
	};
	render() {
		return (
			<>
				<div class="main">
					<p class="sign" align="center">
						Sign in
					</p>
					<input
						className="un"
						type="text"
						align="center"
						placeholder="Username"
						name="username"
						ref={(c) => (this.userlog = c)}
					/>
					<input
						className="pass"
						type="password"
						align="center"
						placeholder="Password"
						name="password"
						ref={(c) => (this.userPass = c)}
					/>
					<div>
						<button
							style={{ align: "center" }}
							className="submit"
							onClick={(e) => this.onClickLogin(e)}
						>
							Log in
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default Login;
