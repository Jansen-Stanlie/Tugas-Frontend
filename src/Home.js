import React, { Component } from "react";

class Home extends Component {
	constructor(props) {
		super(props);
		this.onSave = this.onSave.bind(this);
		this.state = {
			users: [
				{
					id: 1,
					nama: "jansen",
					Umur: 35,
					alamat: "medan",
				},
				{
					id: 2,
					nama: "Alfa",
					Umur: 31,
					alamat: "jakarta",
				},
				{
					id: 3,
					nama: "joko",
					Umur: 10,
					alamat: "solo",
				},
				{
					id: 4,
					nama: "eko cahyonto",
					Umur: 20,
					alamat: "NTB",
				},
				{
					id: 5,
					nama: "Stanlie",
					Umur: 13,
					alamat: "Jatim",
				},
				{
					id: 6,
					nama: "Fian",
					Umur: 24,
					alamat: "malang",
				},
				{
					id: 7,
					nama: "harry rosadi",
					Umur: 31,
					alamat: "Papua",
				},

				{
					id: 8,
					nama: "Dimas",
					Umur: 23,
					alamat: "Bandung",
				},
				{
					id: 9,
					nama: "Sefrinaldi",
					Umur: 30,
					alamat: "Padang",
				},
				{
					id: 10,
					nama: "jansen rosadi",
					Umur: 74,
					alamat: "unknown",
				},
				{
					id: 11,
					nama: "Adzka",
					Umur: 30,
					alamat: "Yogyakarta",
				},
				{
					id: 12,
					nama: "Muhammad",
					Umur: 55,
					alamat: "Galaxy",
				},
				{
					id: 13,
					nama: "aulia",
					Umur: 19,
					alamat: "medan",
				},
				{
					id: 14,
					nama: "janson",
					Umur: 21,
					alamat: "palembang",
				},
				{
					id: 15,
					nama: "Lathief",
					Umur: 30,
					alamat: "padang",
				},

				{
					id: 15,
					nama: "Lathiefs",
					Umur: 30,
					alamat: "padang",
				},

				{
					id: 15,
					nama: "JOKO",
					Umur: 30,
					alamat: "padang",
				},

				{
					id: 15,
					nama: "Eka",
					Umur: 30,
					alamat: "padang",
				},

				{
					id: 15,
					nama: "Alwan",
					Umur: 30,
					alamat: "padang",
				},

				{
					id: 15,
					nama: "Harry",
					Umur: 30,
					alamat: "padang",
				},

				{
					id: 15,
					nama: "Sugeng",
					Umur: 30,
					alamat: "padang",
				},

				{
					id: 15,
					nama: "Purnomo",
					Umur: 30,
					alamat: "padang",
				},

				{
					id: 15,
					nama: "Purnomo",
					Umur: 30,
					alamat: "padangs",
				},
			],
			currentPage: "home",
			userInputName: "",
			userInputAge: "",
			userInputAddress: "",
		};
	}

	renderList = () => {
		return this.state.users.map((user, index) => {
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
					<td>{user.nama}</td>
					<td>{user.Umur}</td>
					<td>{user.alamat}</td>
					<td>
						<button onClick={() => this.onEditHandler(index)}>Edit</button>
						<button onClick={() => this.onDelete(index)}>Delete</button>
					</td>
				</tr>
			);
		});
	};
	onChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	cancelEdit = () => {
		window.location.reload();
	};
	onAddHandler = () => {
		const newData = {
			nama: "",
			Umur: 0,
			alamat: "",
			status: "new",
		};
		this.setState((oldState) => ({
			users: [newData, ...oldState.users],
		}));
	};
	onSave = (id) => {
		const nama = this.inputName;
		const umur = this.inputAge;
		const alamat = this.inputAdress;

		const user = this.state.users;
		const newData = {
			nama: nama,
			Umur: umur,
			alamat: alamat,
		};
		user.splice(id, 0, newData);
		this.setState({
			users: newData,
			userInputName: user.name,
			userInputAge: user.age,
			userInputAddress: user.address,
		});
	};
	onEditHandler = (id) => {
		const checkFilter = this.state.users.filter((user) => user.status);

		if (checkFilter.length > 0) return alert("Silahkan Save Terlebih Dahulu!");

		const user = this.state.users[id];
		const newData = {
			name: user.name,
			age: user.age,
			address: user.address,
			status: "edit",
		};

		let userUpdate = this.state.users;
		userUpdate.splice(id, 1, newData);

		this.setState({
			users: userUpdate,
			userInputName: user.name,
			userInputAge: user.age,
			userInputAddress: user.address,
		});
	};
	onDelete = (id) => {
		let userUpdate = this.state.users;
		userUpdate.splice(id, 1);

		this.setState({
			users: userUpdate,
		});
	};
	changePage = (page) => {
		this.setState({
			currentPage: page,
		});
	};
	render() {
		return (
			<>
				<button
					id="addButton"
					class="btn btn-primary"
					onClick={() => this.onAddHandler()}
				>
					Add New
				</button>
				<input
					class="input-group-text"
					type="text"
					name="search"
					onkeyup="filterRow(this)"
					placeholder="Search for names.."
					title="Type in a name"
				/>
				<table border="2" class="table table-striped" id="our-table">
					<thead class="table-dark">
						<tr>
							<th>No</th>
							<th>Nama</th>
							<th>Umur</th>
							<th>Alamat</th>
							<th colspan="3" align="center">
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

export default Home;
