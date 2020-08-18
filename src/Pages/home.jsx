import React from 'react';
import '../index.css'

import {
	HeaderSection,
	ContentSection,
	FooterSection,
} from '../Templates/index';

const HomePage = () => {
	return (
			<div	className="pageContant">
				<HeaderSection />
				<ContentSection />
				<FooterSection />
			</div>
	);
};

export default HomePage;
