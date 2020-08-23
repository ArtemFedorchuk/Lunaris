import React from 'react';
import styles from './styles.module.scss';
import { Search, X } from 'react-bootstrap-icons';

const SearchInfo = () => {
	const text = 'Monster Hunter World';

	return (
		<div className={styles.searchWrapper}>
			<div>
				<button className={styles.btnSearch}>
					<Search width='21px' height='21px' />
				</button>
			</div>
			<div>
				<input
					className={styles.input}
					type='text'
					name=''
					placeholder={text}
					id=''
				/>
			</div>
			<div>
				<button className={styles.btnClose}>
					<X width='21px' height='21px' />
				</button>
			</div>
		</div>
	);
};

export default SearchInfo;
