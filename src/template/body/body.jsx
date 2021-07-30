import React, { Component, Fragment } from "react";
import { About, Home, Login } from "../../page/page";
import "./body.css";

class Body extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employee: [],
		};
	}
	addEmployee = (employees) => {
		this.setState({
			employee: employees,
		});
	};
	changePage = () => {
		const { page } = this.props;
		if (page === "About") return <About setEmployee={this.addEmployee} />;
		if (page === "Home") return <Home />;
		if (page === "Login") return <Login employeeList={this.state.employee} />;
	};
	render() {
		return (
			<>
				<div className="container-body">{this.changePage()}</div>
			</>
		);
	}
}

export default Body;
