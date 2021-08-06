import React, { Component } from "react";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { className, name, type, value, onChange, placeholder } = this.props;
		return (
			<input
				className={className}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				ref={(c) => (this.input = c)}
				placeholder={placeholder}
				required
			/>
		);
	}
}

export default Input;
