import React from 'react';
import styles from './styles.module.scss';
import postImg from '../../asets/images/news/post-img.png';
import arrowRightIcon from '../../asets/images/news/fas_fa-chevron-right.png';
import { HeartFill } from 'react-bootstrap-icons';

const PostItem = (props) => {
	const { items } = props;
	return (
		<>
			<div className={styles.postRow}>
				<div className={styles.check}>
					<input type='checkbox' className={styles.customCheckbox} />
				</div>

				<div className={styles.postItem}>
					<div className={styles.imgWrapper}>
						<img src={postImg} alt='' />
					</div>
					<div className={styles.postDescr}>
						<div className={styles.text}>
							<h4 className='inner-title'>
								{items.titleIcon && (
									<HeartFill/>
								)}
								{' '}
								<a href='#'>
									{items.person}
								</a>
								{' '}
								{items.title}
							</h4>
							<p>
								{items.description}
								{' '}
								<a href='#'>
									{items.descriptionLink}
								</a>
								{' '}
								{items.descriptionIcon && (
									<HeartFill/>
								)}
								{' '}
								{items.descriptionIcon}
								{' - '}
								<span className={styles.datePubl}>{items.datePublish}</span>
							</p>
						</div>
						<div className={styles.iconWrap}>
							<a href='#'>
								<img src={arrowRightIcon} alt='arrow' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostItem;
