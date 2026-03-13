import Image from 'next/image';
import wall from '@/assets/img/wall.webp';
import floor from '@/assets/img/floor.webp';
import styles from './Floor.module.scss';

export default function Floor() {
	return (
		<section className={styles.floor}>
			<div className='container'>
				<h2>
					terraform <span className='font-cormorant'>Підлога</span>
				</h2>

				<div className={styles.floor__container}>
					<div className={styles.floor__item2}>
						<p>
							<span>
								Сучасна альтернатива ламінату, плитці, кварцвінілу та паркету —
								стабільна, водостійка{' '}
							</span>
							Преміальна SPC-підлога європейського рівня — без місяців очікування та з
							вартістю понад 40% вигіднішою, ніж альтернативи.
						</p>
						<a href='#'>
							Детальніше <span>про підлогу</span>
							<svg
								width='21'
								height='21'
								viewBox='0 0 21 21'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M17.1596 6.63805V14.4424L3.27993 0.562731C2.9196 0.202413 2.4309 -7.69707e-06 1.92132 2.19516e-10C1.41175 7.69751e-06 0.923049 0.202443 0.562731 0.562772C0.202413 0.923101 -7.68633e-06 1.41181 2.18904e-10 1.92138C7.68677e-06 2.43096 0.202443 2.91966 0.562772 3.27997L14.4425 17.1597H6.63805C6.12848 17.1597 5.63978 17.3621 5.27946 17.7224C4.91914 18.0827 4.71671 18.5714 4.71671 19.081C4.71671 19.5906 4.91914 20.0793 5.27946 20.4396C5.63978 20.7999 6.12848 21.0023 6.63805 21.0023H18.345C20.0979 20.9701 21.0023 19.8385 21.0023 18.3501V6.63809C21 6.13005 20.7965 5.64362 20.4365 5.28521C20.0764 4.9268 19.589 4.72559 19.081 4.72559C18.5729 4.72559 18.0856 4.9268 17.7255 5.28521C17.3654 5.64362 17.162 6.13001 17.1596 6.63805Z' />
							</svg>
						</a>
					</div>
					<div className={styles.floor__item1}>
						<Image
							src={wall}
							width={470}
							height={320}
							alt=''
							className={styles.floor__img1}
						/>
						<Image
							src={floor}
							width={520}
							height={650}
							alt=''
							className={styles.floor__img2}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
