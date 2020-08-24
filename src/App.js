import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/home';
import { mock } from './constants';

function App() {
	console.log( typeof mock );
	return (
		<div>
			<HomePage data={mock} />
		</div>
	);
}

export default App;
