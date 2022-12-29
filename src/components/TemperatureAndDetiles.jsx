import React from 'react';
import {
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from '@iconscout/react-unicons';

function TemperatureAndDetiles() {
	return (
		<div>
			<div className="flex items-center justify-center py-6 text-xl text-cyan-300">
				<p>cloudy</p>
			</div>

			<div className="flex items-center justify-between py-3 text-white">
				<img
					src="https://img.icons8.com/ios/50/000000/clouds.png"
					alt="cloudy"
					className="w-20"
				/>
				<p className="text-5xl">34°</p>
				<div className="flex flex-col space-y-2">
					<div className="flex font-light text-sm items-center justify-center">
						<UilTemperature size="18" className="mr-1" />
						Real fell:
						<span className="font-medium ml-1">32°</span>
					</div>

					<div className="flex font-light text-sm items-center justify-center">
						<UilTear size="18" className="mr-1" />
						Humidity:
						<span className="font-medium ml-1">65%</span>
					</div>

					<div className="flex font-light text-sm items-center justify-center">
						<UilWind size="18" className="mr-1" />
						Wind:
						<span className="font-medium ml-1">32km/h</span>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
				<UilSun size="18" />
				<p className="font-light">
					Rise: <span className="font-medium ml-1">6:00</span>
				</p>
				<p className="font-light">|</p>

				<UilSunset size="18" />
				<p className="font-light">
					Set: <span className="font-medium ml-1">16:00</span>
				</p>
				<p className="font-light">|</p>

				<UilSun size="18" />
				<p className="font-light">
					High: <span className="font-medium ml-1">45°</span>
				</p>
				<p className="font-light">|</p>

				<UilSun size="18" />
				<p className="font-light">
					Low: <span className="font-medium ml-1">38°</span>
				</p>
				<p className="font-light">|</p>
			</div>
		</div>
	);
}

export default TemperatureAndDetiles;
