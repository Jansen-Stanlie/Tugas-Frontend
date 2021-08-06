import React, { Component } from "react";
import { connect } from "react-redux";
import "./Data.css";
class Data extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	renderList() {
		const { userList } = this.props;
		console.log("data", userList);
		const mystyle = {
			color: "white",
			backgroundColor: "DodgerBlue",
		};
		return userList.map((user, index) => {
			return (
				<tr key={index}>
					<td>{user.id}</td>
					<td>{user.username}</td>
					<td>{user.password}</td>
					<td>
						<button style={mystyle} onClick={() => this.onEditHandler(index)}>
							Edit
						</button>
					</td>
				</tr>
			);
		});
	}
	render() {
		return (
			<>
				<div>
					<h1>Ini adalah About</h1>
				</div>
				<div id="wrapper">
					<table border="2" className="table table-striped" id="our-table">
						<thead className="table-dark">
							<tr>
								<th>No</th>
								<th>Username</th>
								<th>Password</th>
								<th align="center">CRUD</th>
							</tr>
						</thead>
						<tbody id="table-body">{this.renderList()}</tbody>
					</table>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	userList: state.Auth.user,
});
export default connect(mapStateToProps, null)(Data);
