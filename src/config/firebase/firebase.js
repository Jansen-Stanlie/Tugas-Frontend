import app from "firebase/app";
import "firebase/auth";

const configFirebase = {
	apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
	authDomain: process.env["REACT_APP_FIREBASE_AUTH_DOMAIN"],
	projectId: process.env["REACT_APP_FIREBASE_PROJECT_ID"],
	storageBucket: process.env["REACT_APP_FIREBASE_STORAGE_BUCKET"],
};

class Firebase {
	constructor() {
		app.initializeApp(configFirebase);
		this.auth = app.auth;
	}
	createFirebaseUser = (obj) =>
		this.auth.createUserWithEmailAndPassword(obj.email, obj.password);
}

export default Firebase;
