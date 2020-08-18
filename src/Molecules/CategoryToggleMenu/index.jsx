import React from 'react';
import styles from './styles.module.scss';

const CategoryToggleMenu = (props) => {
	return (
		<div className={styles.wrapperMenu}>
			<ul>
				<li>item 1</li>
				<li>item 2</li>
				<li>item 3</li>
				<li>item 4</li>
				<li>item 5</li>
			</ul>
		</div>
	);
};

export default CategoryToggleMenu;
