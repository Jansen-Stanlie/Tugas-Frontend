import React, { Component } from "react";
import { RowInput } from "../../component/component";
import "./login.css";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
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
	handleSubmit = (event) => {
		const { userList } = this.props;
		console.log("data dari belakang", userList);

		event.preventDefault();
		console.log(`email :`, this.state.username);
		console.log(`password :`, this.state.password);
		for (let index = 0; index < userList.length; index++) {
			if (
				this.state.username === userList[index].username &&
				this.state.password === userList[index].password
			) {
				this.props.loginMasuk();
				return this.setState({
					redirect: true,
				});
			}
		}
		Swal.fire("Opss...", "Login is gagal!", "error");
	};
	render() {
		const { username, password } = this.state;
		if (this.state.redirect) return <Redirect to="/data" />;
		return (
			<>
				<div className="container" id="container">
					<div className="form-container sign-in-container">
						<form onSubmit={this.handleSubmit}>
							<h1>Sign in</h1>
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
							<button type="submit">Sign In</button>
						</form>
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-right">
								<h1>Hello, Friend!</h1>
								<p>Selamat Datang diwebsite Hotel Terbaik se-Indonesia</p>
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
	loginMasuk: () => dispatch({ type: "LOGINOK" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
