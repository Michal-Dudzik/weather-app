import React from 'react';

function Forecast({ title }) {
	return (
		<div>
			<div className="flex items-center justify-start mt-6">
				<p className="text-white font-medium uppercase">{title}</p>
			</div>
			<hr className="my-2"></hr>
			<div className="flex flex-row items-center justify-between text-white">
				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">04:50</p>
					<img
						src="https://img.icons8.com/ios/50/000000/clouds.png"
						alt="cloudy"
						className="w-20 my-1"
					/>
					<p className="font-medium">34°</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">04:50</p>
					<img
						src="https://img.icons8.com/ios/50/000000/clouds.png"
						alt="cloudy"
						className="w-20 my-1"
					/>
					<p className="font-medium">34°</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">04:50</p>
					<img
						src="https://img.icons8.com/ios/50/000000/clouds.png"
						alt="cloudy"
						className="w-20 my-1"
					/>
					<p className="font-medium">34°</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">04:50</p>
					<img
						src="https://img.icons8.com/ios/50/000000/clouds.png"
						alt="cloudy"
						className="w-20 my-1"
					/>
					<p className="font-medium">34°</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">04:50</p>
					<img
						src="https://img.icons8.com/ios/50/000000/clouds.png"
						alt="cloudy"
						className="w-20 my-1"
					/>
					<p className="font-medium">34°</p>
				</div>
			</div>
		</div>
	);
}

export default Forecast;
