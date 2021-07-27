import React, { Component } from "react";
import Input from "../input/input";

class RowInput extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { label, nameInput, typeInput, valueInput, onChangeEvent } =
			this.props;
		return (
			<div className="rowInput">
				<span>{label}</span>
				<Input
					name={nameInput}
					type={typeInput ? typeInput : "text"}
					value={valueInput}
					onChange={onChangeEvent}
				/>
			</div>
		);
	}
}

export default RowInput;
