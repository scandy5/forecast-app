import React, { Component } from 'react';
import './Form.css';

export class Form extends Component {
	render() {
		return (
			<form className="form" onSubmit={this.props.gettingWeather}>
				<input type="text" name="city" placeholder="Enter your city" className="form__input"/>
				<button className="form__submit"></button>
			</form>
		);
	}
}