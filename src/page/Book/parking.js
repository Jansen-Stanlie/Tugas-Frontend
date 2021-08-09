import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { FirebaseContext } from "../../config/firebase";

class ParkingPageFirebase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Location: "",
			Nama: "",
			platnumber: "",
			vehicles: [],
		};
		this.subscribeVehicles = "";
	}

	onSaveHandler = async () => {
		const { Location, platnumber, Nama } = this.state;
		const res = await this.props.firebase.saveFirestoreVehicle({
			Nama,
			Location,
			platnumber,
		});

		// re-call fetching data
		// this.fetchAllData()

		if (res.id) return alert("Data saved!");

		return alert("Could not save data!");
	};

	setValue = (e) => this.setState({ [e.target.name]: e.target.value });

	checkLoginSession = () => {
		this.props.firebase.checkFirebaseSession((o) => {
			console.log("o:", o);
		});
	};

	renderVehicleList = () => {
		return this.state.vehicles.map((vehicle, idx) => {
			return (
				<tr align="center" key={vehicle.id}>
					<td>{idx + 1}</td>
					<td>{vehicle.Location}</td>
					<td>{vehicle.Nama}</td>
					<td>{vehicle.platnumber}</td>
				</tr>
			);
		});
	};

	fetchAllData = async () => {
		// fetch all data from vehicles
		const vehicles = await this.props.firebase.getAllFirestoreVehicle();
		// console.log("vehicles:", vehicles);
		// console.log("vehicles.docs:", vehicles.docs);

		let vehicleList = [];
		vehicles.forEach((vehicle) => {
			let data = vehicle.data();
			vehicleList.push({
				id: vehicle.id,
				...data,
			});
		});
		// console.log("vehicleList:", vehicleList);

		if (vehicleList.length > 0)
			this.setState({
				vehicles: vehicleList,
			});
	};

	subscribeData = () => {
		// set subscribe vehicles
		this.subscribeVehicles = this.props.firebase.getUpdateFirestoreVehicle(
			(vehicles) => {
				console.log(vehicles.docChanges());

				let vehicleList = this.state.vehicles;
				vehicles.docChanges().forEach((change) => {
					const idData = change.doc.id;
					const objData = change.doc.data();
					if (change.type === "added") {
						vehicleList.push({
							id: idData,
							...objData,
						});
					}
					if (change.type === "modified") {
						vehicleList = vehicleList.map((vehicle) => {
							if (vehicle.id === idData)
								return {
									...vehicle,
									...objData,
								};

							return vehicle;
						});
					}
					if (change.type === "removed") {
						vehicleList = vehicleList.filter(
							(vehicle) => vehicle.id !== idData
						);
					}
				});
				this.setState({
					vehicles: vehicleList,
				});
			}
		);
	};

	componentWillUnmount() {
		this.subscribeVehicles();
	}

	componentDidMount() {
		// this.fetchAllData()
		this.subscribeData();
	}

	render() {
		// this.checkLoginSession()
		const { Location, platnumber, Nama } = this.state;
		return (
			<>
				<table>
					<tbody>
						<tr>
							<td>Name</td>
							<td>
								<input
									type="text"
									name="Nama"
									value={Nama}
									onChange={this.setValue}
								/>
							</td>
						</tr>
						<tr>
							<td>Plat Number</td>
							<td>
								<input
									type="text"
									name="platnumber"
									value={platnumber}
									onChange={this.setValue}
								/>
							</td>
						</tr>
						<tr>
							<td>Location</td>
							<td>
								<input
									type="text"
									name="Location"
									value={Location}
									onChange={this.setValue}
								/>
							</td>
						</tr>
						<tr>
							<td colSpan="2" align="center">
								<button onClick={this.onSaveHandler}>Save</button>
							</td>
						</tr>
					</tbody>
				</table>
				<hr />
				<div id="wrapper">
					<table border="2" className="table table-striped" id="our-table">
						<thead className="table-dark">
							<tr>
								<th>No</th>
								<th>Location</th>
								<th>Name</th>
								<th>Plat Number</th>
							</tr>
						</thead>
						<tbody>{this.renderVehicleList()}</tbody>
					</table>
				</div>
			</>
		);
	}
}

class ParkingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<FirebaseContext.Consumer>
				{(firebase) => <ParkingPageFirebase firebase={firebase} />}
			</FirebaseContext.Consumer>
		);
	}
}

export default ParkingPage;
