import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetiles from './components/TemperatureAndDetiles';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';

function App() {
	const fetchWeather = async () => {
		const data = await getWeatherData();
		console.log(data);
	};

	return (
		<div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grey-400">
			<TopButtons></TopButtons>
			<Inputs></Inputs>

			<TimeAndLocation></TimeAndLocation>
			<TemperatureAndDetiles></TemperatureAndDetiles>
			<Forecast title="hourly forecast"></Forecast>
			<Forecast title="daily forecast"></Forecast>
		</div>
	);
}

export default App;
