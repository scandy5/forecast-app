import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Forecast extends Component {
	render() {
		const { tempOneDayLater, tempTwoDaysLater, tempThreeDaysLater, preventDefaultState } = this.props;

		return (
			<div className="forecast">
				{tempOneDayLater &&
					<div className="forecast__containter">
						<p>Temperature tomorrow: {tempOneDayLater && tempOneDayLater.toFixed(0)}°C</p>
						<p>Temperature two days later: {tempTwoDaysLater && tempTwoDaysLater.toFixed(0)}°C</p>
						<p>Temperature tree days later: {tempThreeDaysLater && tempThreeDaysLater.toFixed(0)}°C</p>
						<Button variant="danger" onClick={preventDefaultState}>Close</Button>
					</div>
				}

			</div >
		);
	}
}