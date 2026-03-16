'use client';

import { useModal } from '@/context/ModalContext';
import styles from './Hero.module.scss';

export default function Hero() {
	const { openModal } = useModal();
	return (
		<section className={`${styles.hero}`} id='hero'>
			<div className='container'>
				<div className={styles.hero__main}>
					<h1>
						Cтінові <span className={`${styles.hero__accent}`}>панелі</span>
						<span>та підлогове</span>
						<span className={`${styles.hero__accent}`}>покриття</span>
					</h1>
				</div>

				<div className={`${styles.hero__box}`}>
					<p>
						Альтернатива оздобоювальним та облицювальним матеріалам
						<span>
							Простішe планування, контрольований бюджет і цілісний вигляд простору.
						</span>
					</p>
					<a
						target='_blank'
						className='main-btn'
						href='https://drive.google.com/drive/folders/19rt7JwJyujRDxrTgsb5W3-j7k_DF8uDf'
					>
						<svg
							className={`${styles.hero__btnImage} svg-bg`}
							width='400'
							height='64'
							viewBox='0 0 400 64'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M30.5957 0.5H390C395.247 0.500016 399.5 4.75331 399.5 10V36.4053C399.5 39.1838 398.283 41.8231 396.171 43.6279L375.575 61.2227C373.855 62.6922 371.667 63.5 369.404 63.5H10C4.7533 63.5 0.5 59.2467 0.5 54V27.5947C0.500133 24.8162 1.71655 22.1769 3.8291 20.3721L24.4248 2.77734C26.1449 1.30781 28.3333 0.500017 30.5957 0.5Z' />
						</svg>

						<span>
							<svg
								className={`${styles.hero__arrowdia} svg-arrow`}
								width='12'
								height='12'
								viewBox='0 0 12 12'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M2.19559 3.79275V8.25189L10.126 0.321525C10.3318 0.115651 10.6111 -4.39784e-06 10.9022 1.25424e-10C11.1934 4.39809e-06 11.4726 0.115669 11.6785 0.321548C11.8843 0.527427 12 0.806657 12 1.09781C12 1.38896 11.8843 1.66819 11.6785 1.87406L3.74808 9.80443H8.20725C8.4984 9.80443 8.77763 9.92009 8.9835 10.126C9.18938 10.3318 9.30504 10.6111 9.30504 10.9022C9.30504 11.1934 9.18938 11.4726 8.9835 11.6785C8.77763 11.8843 8.4984 12 8.20725 12H1.5183C0.516786 11.9816 0 11.335 0 10.4846V3.79277C0.00134087 3.5025 0.117592 3.22457 0.323323 3.01979C0.529055 2.815 0.807518 2.70004 1.0978 2.70004C1.38807 2.70004 1.66654 2.815 1.87227 3.01979C2.078 3.22457 2.19425 3.50247 2.19559 3.79275Z' />
							</svg>
							Переглянути каталог
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
