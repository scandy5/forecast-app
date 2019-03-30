import React, { Component } from 'react';
import './Weather.css';
import { Button } from 'react-bootstrap';
import { Forecast } from '../Forecast';

export class Weather extends Component {
	render() {
		const { temp, city, country, pressure, sunset, error, gettingForecast, tempOneDayLater, tempTwoDaysLater, tempThreeDaysLater, preventDefaultState } = this.props;

		return (
			<div className="weather">
				{city &&
					<div className="weather__container">
						<p className="weather__location">City: {city}, {country}</p>
						<p className="weather__temp">Temperature: {temp.toFixed(0)}°C</p>
						<p className="weather__sunrise">Pressure: {pressure}</p>
						<p className="weather__sunset">Sunset: {sunset}</p>
						<Forecast
							tempOneDayLater={tempOneDayLater}
							tempTwoDaysLater={tempTwoDaysLater}
							tempThreeDaysLater={tempThreeDaysLater}
							preventDefaultState={preventDefaultState}
						/>
						<Button className="weather__forecast" onClick={gettingForecast} variant="primary">Forecast at 3 days</Button>
					</div>

				}
				<p className="weather__error">{error}</p>
			</div >
		);
	}
}