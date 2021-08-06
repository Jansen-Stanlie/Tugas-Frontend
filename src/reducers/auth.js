const defaultState = {
	statuslogin: false,
	user: [],
};
const authReducer = (state = defaultState, action) => {
	console.log("state", state);
	console.log("action", action.payload);

	switch (action.type) {
		case "LOGINOK":
			return {
				...state,
				// username: action.payload.user,
				statuslogin: true,
			};
		case "LOGOUT":
			return {
				...state,
				statuslogin: false,
				user: [...state.user, action.payload.user],
			};
		case "renderData":
			return {
				...state,
				user: [...state.user, action.payload.user],
			};
		case "register":
			return {
				...state,
				user: [action.payload.user],
			};
		default:
			return defaultState;
	}
};

export default authReducer;
