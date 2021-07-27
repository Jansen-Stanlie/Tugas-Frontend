import React, { Component } from "react";
import { RowInput } from "../../component/component";
class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
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
					<div>
						<button
							// onClick={() => this.onCheckLogin()}
							style={{ align: "center" }}
							className="submit"
						>
							Log in
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default Register;
