'use client';

import { useEffect, useRef, useState } from 'react';
import { useModal } from '@/context/ModalContext';

import Image from 'next/image';
import styles from './Partners.module.scss';
// import arrowdia from '../../../assets/svg/btnarrowmain.svg';
import maskbg from '../../../assets/img/maskpartners.webp';

export default function Partners() {
	const [isVisible, setIsVisible] = useState(false);
	const blockRef = useRef<HTMLDivElement>(null);
	const { openModal } = useModal();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.8 },
		);

		if (blockRef.current) {
			observer.observe(blockRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section className={styles.partners}>
			<div className='container'>
				<div className={styles.partners__container}>
					<h2>Переваги партнерства</h2>
					<p>
						Ми одні з перших в Україні, хто будує категорію, про яку клієнти лише
						починають питати. І наші партнери стають точкою, де це можна купити
						одразу.
					</p>
				</div>
				<div className={styles.partners__wrapper}>
					<ul className={styles.partners__list}>
						<li>
							<span>01</span>Безкоштовні стенди
						</li>
						<li>
							<span>02</span>Матеріал в наявності
						</li>
						<li>
							<span>03</span>Стабільний попит
						</li>
						<li>
							<span>04</span>Маркетингова підтримка
						</li>
					</ul>

					<div className={styles.partners__box}>
						<button className='main-btn main-btn-beg' onClick={openModal}>
							<svg
								className={`${styles.partners__btnImage} svg-bg`}
								width='400'
								height='64'
								viewBox='0 0 400 64'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M30.5957 0.5H390C395.247 0.500016 399.5 4.75331 399.5 10V36.4053C399.5 39.1838 398.283 41.8231 396.171 43.6279L375.575 61.2227C373.855 62.6922 371.667 63.5 369.404 63.5H10C4.7533 63.5 0.5 59.2467 0.5 54V27.5947C0.500133 24.8162 1.71655 22.1769 3.8291 20.3721L24.4248 2.77734C26.1449 1.30781 28.3333 0.500017 30.5957 0.5Z' />
							</svg>
							<svg
								className={`${styles.partners__arrowdia} svg-arrow`}
								width='12'
								height='12'
								viewBox='0 0 12 12'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M2.19559 3.79275V8.25189L10.126 0.321525C10.3318 0.115651 10.6111 -4.39784e-06 10.9022 1.25424e-10C11.1934 4.39809e-06 11.4726 0.115669 11.6785 0.321548C11.8843 0.527427 12 0.806657 12 1.09781C12 1.38896 11.8843 1.66819 11.6785 1.87406L3.74808 9.80443H8.20725C8.4984 9.80443 8.77763 9.92009 8.9835 10.126C9.18938 10.3318 9.30504 10.6111 9.30504 10.9022C9.30504 11.1934 9.18938 11.4726 8.9835 11.6785C8.77763 11.8843 8.4984 12 8.20725 12H1.5183C0.516786 11.9816 0 11.335 0 10.4846V3.79277C0.00134087 3.5025 0.117592 3.22457 0.323323 3.01979C0.529055 2.815 0.807518 2.70004 1.0978 2.70004C1.38807 2.70004 1.66654 2.815 1.87227 3.01979C2.078 3.22457 2.19425 3.50247 2.19559 3.79275Z' />
							</svg>

							<span>Стати партнером</span>
						</button>
						<div className={styles.partners__box__text}>
							<span>* </span> Ми одразу зв’яжемось з вами і пояснимо формат стенду,
							логістику та умови
						</div>
					</div>
				</div>

				<div className={styles.partners__footer}>
					<div
						className={`${styles.partners__item1} ${isVisible ? styles.animate : ''}`}
						ref={blockRef}
					>
						<Image src={maskbg} width={385} height={559} alt='' />

						<div className={styles.axisVertical}>
							<div className={styles.svgWrapperVertical}>
								<svg
									width='18'
									height='643'
									viewBox='0 0 18 643'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M2.72942 9.87853L7.33027 5.27767L7.32953 640.715C7.32954 641.14 7.49831 641.547 7.79872 641.848C8.09914 642.148 8.50658 642.317 8.93142 642.317C9.35626 642.317 9.7637 642.148 10.0641 641.848C10.3645 641.547 10.5333 641.14 10.5333 640.715L10.534 5.27761L15.1349 9.87855C15.4353 10.179 15.8427 10.3477 16.2676 10.3477C16.6924 10.3477 17.0999 10.1789 17.4003 9.87853C17.7007 9.57812 17.8695 9.17069 17.8695 8.74583C17.8695 8.32098 17.7007 7.91357 17.4003 7.61316L10.4987 0.711558C9.44637 -0.302793 8.24603 -0.168895 7.36858 0.708558L0.464036 7.6131C0.16592 7.91398 -0.000930403 8.3207 6.22039e-05 8.74426C0.00105481 9.16781 0.169761 9.57376 0.469258 9.87326C0.768756 10.1728 1.1747 10.3415 1.59826 10.3425C2.02182 10.3434 2.42854 10.1766 2.72942 9.87853Z'
										fill='#231410'
									/>
								</svg>
							</div>
							<div className={styles.contentVertical}>
								<span>Висота 2.8 м</span>
							</div>
						</div>

						<div className={styles.axisHorizontal}>
							<div className={styles.svgWrapperHorizontal}>
								<svg
									width='470'
									height='18'
									viewBox='0 0 470 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M459.9 2.72904L464.501 7.32989L1.60192 7.3288C1.17708 7.32881 0.769642 7.49758 0.469238 7.79799C0.168835 8.0984 7.4007e-05 8.50585 8.03986e-05 8.93069C8.6748e-05 9.35553 0.16886 9.76297 0.469273 10.0634C0.769685 10.3638 1.17713 10.5325 1.60197 10.5325L464.501 10.5336L459.9 15.1345C459.6 15.435 459.431 15.8424 459.431 16.2672C459.431 16.6921 459.6 17.0995 459.9 17.3999C460.2 17.7003 460.608 17.8691 461.033 17.8691C461.458 17.8691 461.865 17.7003 462.165 17.3999L469.067 10.4983C470.081 9.44599 469.947 8.24565 469.07 7.3682L462.165 0.463656C461.865 0.16554 461.458 -0.00131052 461.034 -0.000317916C460.611 0.000674691 460.205 0.169381 459.905 0.468878C459.606 0.768376 459.437 1.17432 459.436 1.59788C459.435 2.02144 459.602 2.42816 459.9 2.72904Z'
										fill='#231410'
									/>
								</svg>
							</div>
							<div className={styles.contentHorizontal}>
								<span>Ширина 1.22 м або 0.96 м</span>
							</div>
						</div>
					</div>

					<div className={styles.partners__item2}>
						<div className={styles.partners__desc}>
							<h3>Це не пластик?</h3>
							<p>
								Ні. Основа — жорсткий SPC-композит. Він стабільний, не гнеться і не
								поводиться як пластик у монтажі чи експлуатації.
							</p>
						</div>
						<div className={styles.partners__desc}>
							<h3>Хто монтує?</h3>
							<p>
								Матеріал підходить для стандартних монтажних бригад. За потреби
								підкажемо перевірених майстрів у вашому регіоні.
							</p>
						</div>
						<div className={styles.partners__desc}>
							<h3>Чи є запах?</h3>
							<p>
								Ні. Матеріал без запаху та формальдегідів. Його можна монтувати в
								житлових і комерційних просторах без пауз на «вивітрювання».
							</p>
						</div>
						<div className={styles.partners__desc}>
							<h3>Чи є в наявності?</h3>
							<p>
								Так. Усі основні декори постійно є на складі в Хмельницькому. Без
								очікування поставок.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
