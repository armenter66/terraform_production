import styles from './Hero.module.scss';
import Image from 'next/image';
import arrowdia from '../../../assets/svg/btnarrowmain.svg';

export default function Hero() {
	return (
		<section className={`${styles.hero} mt-[-80px]`}>
			<div className='container'>
				<div className={styles.hero__main}>
					<h1>
						Cтінові <span className={`${styles.hero__accent}`}>панелі</span>
						<span className={`block lg: pl-[10px]`}>та підлогове</span>
						<span className={`${styles.hero__accent} lg: pl-[180px]`}>покриття</span>
					</h1>
				</div>

				<div className={`${styles.hero__box}`}>
					<p>
						Terraform замінює одразу кілька рішень у ремонті: камінь, дерево, МДФ,
						плитку та штукатурку.
						<span>
							Простішe планування, контрольований бюджет і цілісний вигляд простору.
						</span>
					</p>
					<a href='#' className='main-btn'>
						<svg
							className={`${styles.hero__btnImage}`}
							width='400'
							height='64'
							viewBox='0 0 400 64'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M30.5957 0.5H390C395.247 0.500016 399.5 4.75331 399.5 10V36.4053C399.5 39.1838 398.283 41.8231 396.171 43.6279L375.575 61.2227C373.855 62.6922 371.667 63.5 369.404 63.5H10C4.7533 63.5 0.5 59.2467 0.5 54V27.5947C0.500133 24.8162 1.71655 22.1769 3.8291 20.3721L24.4248 2.77734C26.1449 1.30781 28.3333 0.500017 30.5957 0.5Z' />
						</svg>
						<Image
							className={`${styles.hero__arrowdia}`}
							src={arrowdia}
							alt='btn'
							width={12}
							height={12}
						/>
						<span>Завантажити каталог з цінами</span>
					</a>
				</div>
			</div>
		</section>
	);
}
