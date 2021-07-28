import React, { Component } from "react";
class About extends Component {
	constructor(props) {
		super(props);
		this.state = { users: this.props.dataUser };
	}

	renderList = () => {
		const { dataUser, userNow } = this.props;
		const mystyle = {
			color: "white",
			backgroundColor: "DodgerBlue",
		};
		return dataUser.map((user, index) => {
			if (userNow === user.name) {
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>{user.address}</td>
						<td>
							<button style={mystyle} onClick={() => this.onEditHandler(index)}>
								Edit
							</button>
						</td>
					</tr>
				);
			}
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{user.name}</td>
					<td>{user.username}</td>
					<td>{user.address}</td>
					<td>
						<button onClick={() => this.onDelete(index)}>Delete</button>
					</td>
				</tr>
			);
		});
	};
	onEditHandler = (id) => {
		const { statusLogin } = this.props;
		this.props.sendID(id);
		console.log("id", id);
		this.props.setTitle("Edit User");
		this.props.setStatusEdit("edit");
		this.props.setStatus(statusLogin, "Register");
	};
	onDelete = (id) => {
		let userUpdate = this.state.users;
		console.log(this.state.users);
		userUpdate.splice(id, 1);

		this.setState({
			users: userUpdate,
		});
	};
	render() {
		const { userNow } = this.props;

		console.log(userNow);
		return (
			<>
				<div>
					<h1>Ini adalah About {userNow}</h1>
				</div>
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
					<tbody id="table-body">{this.renderList()}</tbody>
				</table>
			</>
		);
	}
}

export default About;
