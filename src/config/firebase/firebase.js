import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const configFirebase = {
	apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
	authDomain: process.env["REACT_APP_FIREBASE_AUTH_DOMAIN"],
	projectId: process.env["REACT_APP_FIREBASE_PROJECT_ID"],
	storageBucket: process.env["REACT_APP_FIREBASE_STORAGE_BUCKET"],
};

class Firebase {
	constructor() {
		app.initializeApp(configFirebase);
		this.firestore = app.firestore();
		this.auth = app.auth();
	}

	createFirebaseUser = (obj) =>
		this.auth.createUserWithEmailAndPassword(obj.username, obj.password);

	loginFirebaseUser = (obj) =>
		this.auth.signInWithEmailAndPassword(obj.email, obj.password);
	checkFirebaseSession = (cb) => this.auth.onAuthStateChanged(cb);
	getAllFirestoreVehicle = () => this.firestore.collection("Parking").get();
	saveFirestoreVehicle = (obj) => this.firestore.collection("Parking").add(obj);
	getUpdateFirestoreVehicle = (cb) =>
		this.firestore.collection("Parking").onSnapshot(cb);
}

export default Firebase;
