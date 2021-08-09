import React, { Component } from "react";
import Input from "../input/input";

class RowInput extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const {
			label,
			nameInput,
			typeInput,
			valueInput,
			onChange,
			placeholder,
			className,
		} = this.props;
		return (
			<div className="rowInput">
				<span>{label}</span>
				<Input
					className={className}
					name={nameInput}
					type={typeInput ? typeInput : "text"}
					value={valueInput}
					onChange={onChange}
					placeholder={placeholder}
				/>
			</div>
		);
	}
}

export default RowInput;
