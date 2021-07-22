// import logo from './logo.svg';
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//* react fragment <></>
// export default App;
import React, { Component } from "react";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<body>
					<div id="hero">
						<div class="navbar">
							<img
								src={process.env.PUBLIC_URL + "/logo.png"}
								class="logo"
								alt=""
							/>
							<div class="user">
								<button type="button">create Table</button>
								<button class="JSON" type="button">
									JSON Table
								</button>
								<img src={process.env.PUBLIC_URL + "/User.jpg"} alt="" />
							</div>
						</div>

						<div class="container">
							<div class="info">
								<h1>Portofolio</h1>
								<p>
									my name is jansen i am currently exploring skills in the field
									of fullstack developer which includes java programming
									language for backend and html, CSS, and JavaScript for
									frontend.
								</p>
								{/* <input type="text" placeholder="Search"> */}
							</div>
						</div>
						<div class="slider">
							<img
								src={process.env.PUBLIC_URL + "/left-arrow.png"}
								id="prev"
								alt=""
							/>
							<div class="preview">
								<img
									src={process.env.PUBLIC_URL + "/small1.png"}
									class="thumbnail"
									alt=""
								/>
								<img
									src={process.env.PUBLIC_URL + "/small2.png"}
									class="thumbnail"
									alt=""
								/>
								<img
									src={process.env.PUBLIC_URL + "/small3.png"}
									class="thumbnail"
									alt=""
								/>
								<img
									src={process.env.PUBLIC_URL + "/small4.png"}
									class="thumbnail"
									alt=""
								/>
								<img
									src={process.env.PUBLIC_URL + "/small5.png"}
									class="thumbnail"
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
				</body>
				<footer>
					{/* <img src="./Asset/CNN.jpg"> */}
					<p>© 2021 By Jansen Stanlie.</p>
				</footer>
			</>
		);
	}
}

export default App;
