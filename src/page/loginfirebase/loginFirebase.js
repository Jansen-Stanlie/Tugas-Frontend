import React, { Component } from "react";
import { RowInput } from "../../component/component";
import "./loginFirebase.css";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FirebaseContext } from "../../config/firebase";
class LoginFirebase2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
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
		const { email, password } = this.state;
		console.log("email", email);
		console.log("password", password);

		this.props.firebase
			.loginFirebaseUser({ email, password })
			.then(
				(res) =>
					this.setState({
						redirect: true,
					}),

				console.log("makan")
			)
			.then(() => {
				this.props.loginMasuk();
			})
			.then(() => Swal.fire("congrast", "Welcome", "success"))
			.catch((err) => Swal.fire("Opss...", err.message, "error"));

		// Swal.fire("Opss...", "Login is gagal!", "error");
	};

	checkFirebase = () => {
		return (a) => {
			console.log(a);
			return <h1>Connect Firebase Test</h1>;
		};
	};
	render() {
		const { email, password } = this.state;
		if (this.state.redirect) return <Redirect to="/data" />;
		return (
			<>
				<FirebaseContext.Consumer>
					{this.checkFirebase()}
				</FirebaseContext.Consumer>
				<div className="container" id="container">
					<div className="form-container sign-in-container">
						<form onSubmit={this.handleSubmit}>
							<h1>Sign in Firebase</h1>
							<div className="social-container"></div>
							<RowInput
								name="email"
								typeInput=""
								placeholder="email"
								nameInput="email"
								value={email}
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
								<p>Gunakan email (Joko@gmail.com) dan password (Banteng@)</p>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
class LoginFirebaseTest extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<FirebaseContext.Consumer>
				{(firebase) => <LoginFirebase2 {...this.props} firebase={firebase} />}
			</FirebaseContext.Consumer>
		);
	}
}

const mapStateToProps = (state) => ({
	userList: state.Auth.user,
	status: state.Auth.statuslogin,
});
const mapDispatchToProps = (dispatch) => ({
	loginMasuk: () => dispatch({ type: "LOGINOK" }),
	batalLogin: () => dispatch({ type: "LOGOUT" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginFirebaseTest);
