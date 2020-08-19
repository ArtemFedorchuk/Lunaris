import React from 'react';
import styles from './styles.module.scss';
import postImg from '../../asets/images/news/post-img.png';
import arrowRightIcon from '../../asets/images/news/fas_fa-chevron-right.png';
import {Col} from "react-bootstrap";

const PostItem = (props) => {
	return (
		<div>
			<div className={styles.postRow}>
					<div className={styles.check}>
						<input type="checkbox"/>
					</div>

					<div className={styles.postItem}>
						<div className={styles.imgWrapper}>
							<img src={postImg} alt=""/>
						</div>
						<div className={styles.postDescr}>
							<div className={styles.text}>
								<h4 className="inner-title">&hearts; <a href="#">Hakio</a> a écrit un nouvel article.</h4>
								<p>Sur “Sortie de Monster Hunter World” - 30 mars 2020</p>
							</div>
							<div className={styles.iconWrap}>
								<a href="#">
									<img src={arrowRightIcon} alt="arrow"/>
								</a>
							</div>
						</div>
					</div>
			</div>
		</div>
	);
};

export default PostItem
