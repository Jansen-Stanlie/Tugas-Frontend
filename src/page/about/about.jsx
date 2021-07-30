import React, { Component } from "react";
// import { Table } from "react-bootstrap";
import "./about.css";
class About extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	getEmployee = () => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => {
				console.log("json:", json);
				this.props.setEmployee(json);
			});
	};
	componentDidMount() {
		this.getEmployee();
	}
	render() {
		return (
			<>
				<div id="wrapper">
					<table border="2" className="table table-striped" id="our-table">
						<thead className="table-dark">
							<tr>
								<th>No</th>
								<th>Nama</th>
								<th>Username</th>
								<th>Alamat</th>
								<th colSpan="3" align="center">
									CRUD
								</th>
							</tr>
						</thead>
						<tbody id="table-body">
							<tr>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
							</tr>
							<tr>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
							</tr>
							<tr>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
							</tr>
							<tr>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
							</tr>
							<tr>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
							</tr>
							<tr>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
							</tr>
							<tr>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
							</tr>
							<tr>
								<td>qweqssswe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
								<td>qweqwe</td>
							</tr>
						</tbody>
					</table>
				</div>
			</>
		);
	}
}

export default About;
