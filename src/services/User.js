import axios from "axios";

const User_URL = "http://localhost:8080/hotel/";

class userService {
	getUsers() {
		return axios.get(User_URL + "login");
	}
	createUser(user) {
		return axios.post(User_URL + "Register", user);
	}
}
export default new userService();
