import React, { Component } from "react";
class About extends Component {
	constructor(props) {
		super(props);
		this.state = { users: this.props.dataUser };
	}

	renderList = () => {
		const { dataUser } = this.props;

		return dataUser.map((user, index) => {
			if (user.status && user.status === "new") {
				return (
					<tr key={index}>
						<td></td>
						<td>
							<input
								type="text"
								name="userInputName"
								ref={(c) => (this.inputName = c)}
							/>
						</td>
						<td>
							<input
								type="number"
								name="userInputAge"
								ref={(c) => (this.inputAge = c)}
							/>
						</td>
						<td>
							<input
								type="text"
								name="userInputAddress"
								ref={(c) => (this.inputAdress = c)}
							/>
						</td>
						<td>
							<button onClick={() => this.onSave(index)}>Save</button>
							<button>Cancel</button>
						</td>
					</tr>
				);
			}
			if (user.status && user.status === "edit")
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>
							<input
								name="userInputName"
								type="text"
								value={this.state.userInputName}
								onChange={this.onChangeHandler}
							/>
						</td>
						<td>
							<input
								name="userInputAge"
								type="number"
								value={this.state.userInputAge}
								onChange={this.onChangeHandler}
							/>
						</td>
						<td>
							<input
								name="userInputAddress"
								type="text"
								value={this.state.userInputAddress}
								onChange={this.onChangeHandler}
							/>
						</td>
						<td>
							<button onClick={() => this.onSave(index)}>Save</button>
							<button onClick={() => this.cancelEdit()}>Cancel</button>
						</td>
					</tr>
				);

			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{user.name}</td>
					<td>{user.username}</td>
					<td>{user.address}</td>
					<td>
						<button onClick={() => this.onEditHandler(index)}>Edit</button>
						<button onClick={() => this.onDelete(index)}>Delete</button>
					</td>
				</tr>
			);
		});
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
