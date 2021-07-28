import React, { Component } from "react";
import { RowInput } from "../../component/component";
import SweetAlert from "sweetalert2";
import "./login.css";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		};
	}
	onLogin = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
		console.log(e.target.value);
	};
	onCheckLogin = () => {
		const { dataUsers } = this.props;
		console.log(dataUsers);
		console.log("this.state.username", this.state.username);
		for (let index = 0; index < dataUsers.length; index++) {
			if (
				this.state.username === dataUsers[index].username &&
				this.state.password === dataUsers[index].password
			) {
				this.props.setNav("LogOut");
				this.props.setStatus(true, "About");
				this.props.setUser(dataUsers[index].name);
				this.props.changeTombol("Edit");
				return SweetAlert.fire("Welcome", dataUsers[index].name, "success");
			}
		}
		SweetAlert.fire("Warning", "Check Again username and Password", "error");
	};
	render() {
		return (
			<>
				<div className="main">
					<p className="sign">Sign in</p>
					<RowInput
						className="un"
						typeInput=" "
						align="center"
						placeholder="Username"
						nameInput="username"
						// valueInput=""
						onChangeEvent={(e) => this.onLogin(e)}
					/>
					<RowInput
						className="pass"
						typeInput="password"
						align="center"
						placeholder="Password"
						nameInput="password"
						// valueInput=""
						onChangeEvent={(e) => this.onLogin(e)}
					/>
					<div>
						<button
							onClick={() => this.onCheckLogin()}
							style={{ align: "center" }}
							className="submit"
						>
							Log in
						</button>
						{/* <button
							onClick={() => this.onCheckLogin()}
							style={{ align: "center" }}
							className="submit"
						>
							Log in
						</button> */}
					</div>
				</div>
			</>
		);
	}
}

export default Login;
