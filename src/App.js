import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/home';
import { dataList } from './constants';

function App() {
	console.log( typeof dataList );
	return (
		<div>
			<HomePage data={dataList} />
		</div>
	);
}

export default App;
