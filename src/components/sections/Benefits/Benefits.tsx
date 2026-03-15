'use client';

import { useModal } from '@/context/ModalContext';
import { useState } from 'react';
import ComparisonModal from '@/components/ComparisonModal/ComparisonModal';

import Image from 'next/image';
import styles from './Benefits.module.scss';

import ask from '@/assets/svg/ask.svg';

export default function Benefits() {
	const { openModal } = useModal();
	const [isTableOpen, setIsTableOpen] = useState(false);

	return (
		<section className={styles.benefits}>
			<div className='container'>
				<h2 className={styles.benefits__title}>
					Переваги Terraform <span>для стін та підлоги</span>
					<Image src={ask} width={240} height={375} alt='' />
				</h2>

				<div className={styles.benefits__container}>
					<div className={styles.benefits__wrapper}>
						<div className={styles.benefits__wrapper__row}>
							<div className={styles.benefits__wrapper__item}>
								<h4>
									У наявності на складі <br />в Хмельницькому
								</h4>
								<p>
									Жодних тижнів очікування — матеріал готовий до реалізації проєкту тоді,
									коли це потрібно вам
								</p>
							</div>

							<div className={styles.benefits__wrapper__item}>
								<h4>Монтаж протягом одного дня</h4>
								<p>
									Без демонтажу старого покриття, без тривалих підготовчих робіт і
									затяжних ремонтних процесів
								</p>
							</div>
						</div>

						<div className={styles.benefits__wrapper__row}>
							<div className={styles.benefits__wrapper__item}>
								<h4>Преміум-якість без преміум-ціни</h4>
								<p>
									Підходить для житла, комерції, HoReCa, просторів із регулярними
									оновленнями та об’єктів, де критично важливі терміни
								</p>
							</div>

							<div className={styles.benefits__wrapper__item}>
								<h4>До 45% вигідніше </h4>
								<p>
									Раціональніша вартість матеріалу та монтажу без втрати візуального
									рівня простору
								</p>
							</div>
						</div>
					</div>

					<button onClick={() => setIsTableOpen(true)} className={styles.benefits__btn}>
						Порівняння{' '}
						<span>
							класичних матеріалів <br /> та Terraform
						</span>
						<svg
							width='21'
							height='21'
							viewBox='0 0 21 21'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M17.1596 6.63805V14.4424L3.27993 0.562731C2.9196 0.202413 2.4309 -7.69707e-06 1.92132 2.19516e-10C1.41175 7.69751e-06 0.923049 0.202443 0.562731 0.562772C0.202413 0.923101 -7.68633e-06 1.41181 2.18904e-10 1.92138C7.68677e-06 2.43096 0.202443 2.91966 0.562772 3.27997L14.4425 17.1597H6.63805C6.12848 17.1597 5.63978 17.3621 5.27946 17.7224C4.91914 18.0827 4.71671 18.5714 4.71671 19.081C4.71671 19.5906 4.91914 20.0793 5.27946 20.4396C5.63978 20.7999 6.12848 21.0023 6.63805 21.0023H18.345C20.0979 20.9701 21.0023 19.8385 21.0023 18.3501V6.63809C21 6.13005 20.7965 5.64362 20.4365 5.28521C20.0764 4.9268 19.589 4.72559 19.081 4.72559C18.5729 4.72559 18.0856 4.9268 17.7255 5.28521C17.3654 5.64362 17.162 6.13001 17.1596 6.63805Z' />
						</svg>
					</button>
				</div>
			</div>
			<ComparisonModal
				isOpen={isTableOpen}
				onClose={() => setIsTableOpen(false)}
			/>
		</section>
	);
}
