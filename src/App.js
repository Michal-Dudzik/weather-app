import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetiles from './components/TemperatureAndDetiles';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {
	const [query, setQuery] = useState({
		q: 'berlin',
	});
	const [units, setUnits] = useState('metric');
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			await getFormattedWeatherData({ ...query, units }).then((data) => {
				setWeather(data);
			});
		};

		fetchWeather();
	}, [query, units]);

	return (
		<div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grey-400">
			<TopButtons></TopButtons>
			<Inputs></Inputs>

			{weather && (
				<div>
					<TimeAndLocation weather={weather}></TimeAndLocation>
					<TemperatureAndDetiles weather={weather}></TemperatureAndDetiles>

					<Forecast title="hourly forecast" items={weather.hourly}></Forecast>
					<Forecast title="daily forecast" items={weather.daily}></Forecast>
				</div>
			)}
		</div>
	);
}

export default App;
