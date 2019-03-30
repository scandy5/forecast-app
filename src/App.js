import React, { Component } from 'react';
import './App.css';
import { Info } from './components/Info';
import { Form } from './components/Form';
import { Weather } from './components/Weather';

const apiKey = '14c2087fb773349cfd702f4c0f67731c';

class App extends Component {

	state = {
		temp: undefined,
		tempOneDayLater: undefined,
		tempTwoDaysLater: undefined,
		tempThreeDaysLater: undefined,
		city: undefined,
		country: undefined,
		preasure: undefined,
		sunset: undefined,
		error: undefined
	}

	preventDefaultState = () => {
		this.setState({
			tempOneDayLater: undefined,
			tempTwoDaysLater: undefined,
			tempThreeDaysLater: undefined,
		})
	}

	gettingWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;

		if (city) {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
			const data = await response.json();

			if (data.name) {
				let sunset = data.sys.sunset;
				let date = new Date();
				date.setTime(sunset);
				let sunsetDate = date.getHours() + ':' + date.getMinutes();

				this.setState({
					temp: data.main.temp,
					city: data.name,
					country: data.sys.country,
					pressure: data.main.pressure,
					sunset: sunsetDate,
					error: undefined
				})
			} else {
				this.setState({
					temp: undefined,
					city: undefined,
					country: undefined,
					preasure: undefined,
					sunset: undefined,
					error: "City not found"
				})
			}

		} else {
			this.setState({
				temp: undefined,
				city: undefined,
				country: undefined,
				preasure: undefined,
				sunset: undefined,
				error: "Enter your city, please!"
			})
		}
	}

	gettingForecast = async (e) => {
		e.preventDefault();
		const city = this.state.city;

		const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
		const data = await response.json();

		this.setState({
			tempOneDayLater: data.list[0].main.temp,
			tempTwoDaysLater: data.list[1].main.temp,
			tempThreeDaysLater: data.list[2].main.temp
		})
	}

	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<div className="left">
						<Info />
					</div>
					<div className="right">
						<Form gettingWeather={this.gettingWeather} />
						<Weather
							temp={this.state.temp}
							tempOneDayLater={this.state.tempOneDayLater}
							tempTwoDaysLater={this.state.tempTwoDaysLater}
							tempThreeDaysLater={this.state.tempThreeDaysLater}
							city={this.state.city}
							country={this.state.country}
							pressure={this.state.pressure}
							sunset={this.state.sunset}
							error={this.state.error}
							gettingForecast={this.gettingForecast}
							preventDefaultState={this.preventDefaultState}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
