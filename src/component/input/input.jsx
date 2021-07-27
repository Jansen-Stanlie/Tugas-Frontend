import React, { Component } from "react";
import "./input.css";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { name, type, value, onChange } = this.props;
		return (
			<input
				className="input-style"
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				ref={(c) => (this.input = c)}
				required
			/>
		);
	}
}

export default Input;
