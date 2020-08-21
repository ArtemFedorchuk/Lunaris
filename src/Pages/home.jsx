import React from 'react';
import '../index.css';
import {
	HeaderSection,
	ContentSection,
	FooterSection,
} from '../Templates/index';

const HomePage = (props) => {
	const { data } = props;
	return (
		<div className='pageContant'>
			<HeaderSection />
			<ContentSection data={data} />
			<FooterSection />
		</div>
	);
};

export default HomePage;
