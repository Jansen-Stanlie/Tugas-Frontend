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
			Email: "",
			Checkpassword: "",
			id: this.props.sendID,
			status: this.props.setStatusNow,
			title: this.props.setTitle,
			tombol: this.props.tombol,
			user: this.props.dataUser,
		};
	}
	onLogin = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
		console.log(e.target.value, [e.target.name]);
	};
	onCheckRegister = () => {
		const { dataUser } = this.props;
		console.log(dataUser);
		console.log("this.state.Email", this.state.Email);
		console.log("this.state.Check", this.state.Checkpassword);
		if (
			this.state.username === "" ||
			this.state.password === "" ||
			this.state.Nama === "" ||
			this.state.Alamat === "" ||
			this.state.Email === ""
		) {
			return SweetAlert.fire("Warning", "Fill the blank Space", "error");
		}
		if (/\s/.test(this.state.password)) {
			return SweetAlert.fire(
				"Warning",
				"Password Cannot Contain white Space",
				"error"
			);
		}
		for (let index = 0; index < dataUser.length; index++) {
			if (this.state.Email === dataUser[index].email) {
				// this.props.setNav("LogOut");
				// this.props.setStatus(true, "About");
				// this.props.setUser(dataUser[index].name);
				return SweetAlert.fire(
					"Warning",
					` user with email: ${dataUser[index].email} already exist`,
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
		} else if (!re.test(this.state.Email)) {
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
		if (this.state.status === "edit") {
			const { statusLogin } = this.props;
			this.props.setStatus(statusLogin, "About");

			let userUpdate = {
				name: this.state.Nama,
				username: this.state.username,
				password: this.state.password,
				address: this.state.Alamat,
				email: this.state.Email,
			};

			this.state.user.splice(this.state.id, 1, userUpdate);

			this.props.changeUser(this.state.user);
			this.props.setUser(userUpdate.name);

			return SweetAlert.fire(
				"SUCCESS EDIT",
				` Succes Edit for ${this.state.Nama}`,
				"success"
			);
		}
		dataUser.push({
			name: this.state.Nama,
			username: this.state.username,
			password: this.state.password,
			address: this.state.Alamat,
			email: this.state.Email,
		});
		console.log(dataUser);
		this.props.setStatus(false, "Home");
		SweetAlert.fire(
			"SUCCESS REGISTER",
			` Succes Register for ${this.state.Nama}`,
			"success"
		);
	};
	onClickcancel = () => {
		const { statusLogin } = this.props;
		if (this.state.status === "edit") {
			console.log("cancel");
			console.log(this.state.status);
			this.props.setNav("LogOut");
			console.log("Status Sekarang", statusLogin);
			return this.props.setStatus(statusLogin, "About");
		}
		return this.props.setStatus(false, "Home");
	};
	render() {
		return (
			<>
				<div className="container">
					<div className="info">
						<h1>{this.state.title}</h1>
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
								className="un"
								typeInput=" "
								align="center"
								placeholder="Email"
								nameInput="Email"
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
								typeInput="password"
								align="center"
								placeholder="Check Password"
								nameInput="Checkpassword"
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
									onClick={(e) => this.onCheckRegister()}
									style={{ align: "center" }}
									className="Register"
								>
									{this.state.tombol}
								</button>
								<button
									onClick={(e) => this.onClickcancel()}
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
