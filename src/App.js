import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Shop from './Shop';
import Item from './Item';

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Shop />} />
				<Route exact path="/item" element={<Item />} />
			</Routes>
		</Router>
	);
};

export default App;
