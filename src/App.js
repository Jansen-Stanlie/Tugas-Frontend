import { BrowserRouter as Router } from "react-router-dom";
import { Body, Navbar } from "./templates/templates";
function App() {
	return (
		<>
			<Router>
				<Navbar></Navbar>
				<Body></Body>
			</Router>
		</>
	);
}

export default App;
