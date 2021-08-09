import React, { Component } from "react";

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { children } = this.props;
		return (
			<>
				<div className={`menu-item`}>{children}</div>
			</>
		);
	}
}

export default Nav;
