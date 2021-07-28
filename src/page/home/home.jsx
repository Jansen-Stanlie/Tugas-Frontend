import React, { Component } from "react";
import Login from "../login/login";
import "./home.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { setStatus, dataUser, setNav, setUser, changeTombol } = this.props;
		return (
			<div id="hero">
				<div className="container">
					<div className="info">
						<h1>Portofolio</h1>
						<p>
							my name is jansen i am currently exploring skills in the field of
							fullstack developer which includes java programming language for
							backend and html, CSS, and JavaScript for frontend.
						</p>

						<Login
							dataUsers={dataUser}
							setStatus={setStatus}
							setNav={setNav}
							setUser={setUser}
							changeTombol={changeTombol}
						/>
					</div>
				</div>
				<div className="slider">
					<img
						src={process.env.PUBLIC_URL + "/left-arrow.png"}
						id="prev"
						alt=""
					/>
					<div className="preview">
						<img
							src={process.env.PUBLIC_URL + "/small1.png"}
							className="thumbnail"
							alt=""
						/>
						<img
							src={process.env.PUBLIC_URL + "/small2.png"}
							className="thumbnail"
							alt=""
						/>
						<img
							src={process.env.PUBLIC_URL + "/small3.png"}
							className="thumbnail"
							alt=""
						/>
						<img
							src={process.env.PUBLIC_URL + "/small4.png"}
							className="thumbnail"
							alt=""
						/>
						<img
							src={process.env.PUBLIC_URL + "/small5.png"}
							className="thumbnail"
							alt=""
						/>
					</div>
					<img
						src={process.env.PUBLIC_URL + "/right-arrow.png"}
						id="next"
						alt=""
					/>
				</div>
			</div>
		);
	}
}

export default Home;
