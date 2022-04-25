import React from 'react';
const checkoutWithNume = require('nume-pay');

const App = () => {
	const handleSubmit = async () => {
		const payload = {
			merchantId: 4,
			referenceId: 'ref',
			amountUsd: 20.5,
			products: [
				{
					skuId: 'he',
					count: 4,
				},
			],
		};
		const god = await checkoutWithNume(payload);
		console.log(god);
	};
	return (
		<div className="App">
			<button onClick={handleSubmit}> Pay with nume</button>
		</div>
	);
};

export default App;
