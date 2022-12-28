import React from 'react';

function TopButtons() {
	const cities = [
		{
			id: 1,
			title: 'London',
			country: 'UK',
		},
		{
			id: 2,
			title: 'Paris',
			country: 'France',
		},
		{
			id: 3,
			title: 'New York',
			country: 'USA',
		},
		{
			id: 4,
			title: 'Tokyo',
			country: 'Japan',
		},
		{
			id: 5,
			title: 'Moscow',
			country: 'Russia',
		},
	];
	return (
		<div className="flex items-center justify-around my-6">
			{cities.map((city) => {
				return (
					<button
						key={city.id}
						className="text-white text-lg font-medium hover:scale-125">
						{city.title}
					</button>
				);
			})}
		</div>
	);
}

export default TopButtons;
