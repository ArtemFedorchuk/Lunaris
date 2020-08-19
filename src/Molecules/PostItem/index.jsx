import React from 'react';
import styles from './styles.module.scss';
import postImg from '../../asets/images/news/post-img.png';
import arrowRightIcon from '../../asets/images/news/fas_fa-chevron-right.png';

const PostItem = () => {
	return (
		<div>
			<div className={styles.postRow}>
				<div className={styles.check}>
					<input type='checkbox' />
				</div>

				<div className={styles.postItem}>
					<div className={styles.imgWrapper}>
						<img src={postImg} alt='' />
					</div>
					<div className={styles.postDescr}>
						<div className={styles.text}>
							<h4 className='inner-title'>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								&hearts; <a href='#'>Hakio</a> a écrit un nouvel article.
							</h4>
							<p>Sur “Sortie de Monster Hunter World” - 30 mars 2020</p>
						</div>
						<div className={styles.iconWrap}>
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<a href='#'>
								<img src={arrowRightIcon} alt='arrow' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
