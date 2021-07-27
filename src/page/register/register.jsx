import React, { Component } from "react";
import { RowInput } from "../../component/component";
import "./register.css";
import SweetAlert from "sweetalert2";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			Nama: "",
			Alamat: "",
		};
	}
	onLogin = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
		console.log(e.target.value, [e.target.name]);
	};
	onCheckRegister = () => {
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
				return SweetAlert.fire("Welcome", dataUsers[index].name, "success");
			}
		}
		SweetAlert.fire("Warning", "Check Again username and Password", "error");
	};
	render() {
		return (
			<>
				<div className="container">
					<div className="info">
						<h1>Register new User</h1>
						<div className="main">
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
							<RowInput
								className="pass"
								typeInput=" "
								align="center"
								placeholder="Nama"
								nameInput="Nama"
								// valueInput=""
								onChangeEvent={(e) => this.onLogin(e)}
							/>
							<RowInput
								className="pass"
								typeInput=" "
								align="center"
								placeholder="Alamat"
								nameInput="Alamat"
								// valueInput=""
								onChangeEvent={(e) => this.onLogin(e)}
							/>
							<div>
								<button
									// onClick={() => this.onCheckLogin()}
									style={{ align: "center" }}
									className="Register"
								>
									Register
								</button>
								<button
									// onClick={() => this.onCheckLogin()}
									style={{ align: "center" }}
									className="Cancel"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Register;
