import React, { Component } from "react";
import { RowInput } from "../../component/component";
import "./login.css";
import Button from "react-bootstrap/Button";
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employee: this.props.employeeList,
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
	render() {
		return (
			<>
				<div id="hero">
					<div className="container">
						<div className="info">
							<h1>Jansen's Company</h1>
							<p>Please Sign In to check your Report</p>

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
									<Button
										// onClick={() => this.onCheckLogin()}
										style={{ align: "center" }}
										className="submit"
									>
										Log in
									</Button>
									{/* <button
							onClick={() => this.onCheckLogin()}
							style={{ align: "center" }}
							className="submit"
						>
							Log in
						</button> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Login;
