'use client';

import { useModal } from '@/context/ModalContext';
import Image from 'next/image';
import styles from './Catalog.module.scss';
import union from '@/assets/svg/Union.svg';

export default function Catalog() {
	const { openModal } = useModal();
	return (
		<section className={styles.catalog}>
			<div className='container'>
				<Image
					src={union}
					width={772}
					height={654}
					alt=''
					className={styles.union}
				/>
				<h2>Як отримати каталог?</h2>
				<div className={styles.catalog__container}>
					<div
						className={`${styles.catalog__item1} ${styles.catalog__item}`}
						onClick={openModal}
					>
						<h4>Крок 1</h4>
						<p>
							Залишаєте <br />
							контакти у формі
						</p>
						<svg
							width='85'
							height='72'
							viewBox='0 0 85 72'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clip-path='url(#clip0_630_16037)'>
								<path
									d='M37.292 72L15.0922 72C6.75701 72 0 65.243 0 56.9078L0 44.266C0 39.9203 1.87325 35.7855 5.14029 32.9199L38.4012 3.74609C41.1541 1.3314 44.6912 -1.95351e-06 48.3531 -2.11358e-06L69.9078 -3.05577e-06C78.243 -3.42011e-06 85 6.757 85 15.0922V30.2688C85 34.7999 82.9641 39.0914 79.4547 41.9577L46.8389 68.5967C44.1441 70.7977 40.7715 72 37.292 72Z'
									fill='#754437'
								/>
								<g clip-path='url(#clip1_630_16037)'>
									<path
										d='M35.8423 31.638V39.4424L49.722 25.5627C50.0823 25.2024 50.5711 25 51.0806 25C51.5902 25 52.0789 25.2024 52.4392 25.5628C52.7995 25.9231 53.002 26.4118 53.002 26.9214C53.0019 27.431 52.7995 27.9197 52.4392 28.28L38.5595 42.1597H46.3639C46.8735 42.1597 47.3622 42.3621 47.7225 42.7224C48.0828 43.0827 48.2852 43.5714 48.2852 44.081C48.2852 44.5906 48.0828 45.0793 47.7225 45.4396C47.3622 45.7999 46.8735 46.0023 46.3639 46.0023H34.6569C32.9041 45.9701 31.9996 44.8385 31.9996 43.3501V31.6381C32.002 31.1301 32.2054 30.6436 32.5655 30.2852C32.9256 29.9268 33.4129 29.7256 33.921 29.7256C34.429 29.7256 34.9164 29.9268 35.2765 30.2852C35.6365 30.6436 35.84 31.13 35.8423 31.638Z'
										fill='#FFF6E5'
									/>
								</g>
							</g>
							<defs>
								<clipPath id='clip0_630_16037'>
									<rect width='85' height='72' fill='white' />
								</clipPath>
								<clipPath id='clip1_630_16037'>
									<rect
										width='21.0023'
										height='21.0023'
										fill='white'
										transform='matrix(-1 0 0 1 53.002 25)'
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
					<div className={`${styles.catalog__item2} ${styles.catalog__item}`}>
						<h4>Крок 2</h4>
						<p>Отримуєте PDF-каталог із декорами, цінами та базовими параметрами</p>
					</div>
					<div className={`${styles.catalog__item3} ${styles.catalog__item}`}>
						<h4>Крок 3</h4>
						<p>Обираєте рішення або обговорюємо умови співпраці</p>
					</div>
				</div>
			</div>
		</section>
	);
}
