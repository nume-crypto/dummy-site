import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Shop from './Shop';
import Item from './Item';
import Success from './Success';

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Shop />} />
				<Route exact path="/item" element={<Item />} />
				<Route exact path="/success" element={<Success />} />
			</Routes>
		</Router>
	);
};

export default App;
