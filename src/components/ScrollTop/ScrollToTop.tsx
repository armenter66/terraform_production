'use client';

import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.scss';

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
			onClick={scrollToTop}
			aria-label='Піднятися вгору'
		>
			<svg
				width='45'
				height='45'
				viewBox='0 0 45 45'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8.25611 1.18088C9.05133 0.422857 10.1078 0 11.2064 0H40.724C43.0856 0 45 1.91444 45 4.27602L45 34.1178C45 35.2874 44.5209 36.406 43.6743 37.213L36.7439 43.8191C35.9487 44.5771 34.8922 45 33.7936 45L4.27602 45C1.91444 45 0 43.0856 0 40.724V10.8822C0 9.71258 0.47909 8.59403 1.32569 7.78704L8.25611 1.18088Z'
					fill='#754437'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M18.6174 21.2845L21.3112 18.5908L21.3112 28.1722C21.3112 28.4209 21.41 28.6595 21.5859 28.8354C21.7617 29.0113 22.0003 29.1101 22.249 29.1101C22.4978 29.1101 22.7363 29.0112 22.9122 28.8354C23.0881 28.6595 23.1869 28.4209 23.1869 28.1722L23.1869 18.5907L25.8807 21.2845C26.0565 21.4604 26.2951 21.5592 26.5438 21.5592C26.7926 21.5592 27.0311 21.4604 27.207 21.2845C27.3829 21.1086 27.4817 20.8701 27.4817 20.6214C27.4817 20.3726 27.3829 20.1341 27.207 19.9582L23.1662 15.9174C22.5501 15.3235 21.8473 15.4019 21.3336 15.9156L17.2911 19.9582C17.1165 20.1343 17.0188 20.3725 17.0194 20.6204C17.02 20.8684 17.1188 21.1061 17.2941 21.2815C17.4695 21.4568 17.7071 21.5556 17.9551 21.5562C18.2031 21.5567 18.4412 21.4591 18.6174 21.2845Z'
					fill='white'
				/>
			</svg>
		</button>
	);
}
