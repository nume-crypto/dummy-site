import React from 'react';
const { authorize, checkoutWithNume } = require('nume-pay-test');

const App = () => {
	const handleSubmit = async () => {
		let accessToken = await authorize(
			process.env.REACT_APP_NUME_CLIENT_ID,
			process.env.REACT_APP_NUME_CLIENT_SECRET
		);
		const payload = {
			accessToken: accessToken,
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
