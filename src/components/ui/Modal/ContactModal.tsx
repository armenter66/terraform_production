'use client';

import { useModal } from '@/context/ModalContext';
import styles from './ContactModal.module.scss';

export default function ContactModal() {
	const { isOpen, closeModal } = useModal();

	if (!isOpen) return null;

	return (
		<div className={styles.overlay} onClick={closeModal}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<button className={styles.close} onClick={closeModal}>
					<svg
						width='55'
						height='55'
						viewBox='0 0 55 55'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g clipPath='url(#clip0_812_583)'>
							<path
								d='M10.0908 1.44329C11.0627 0.516825 12.354 0 13.6968 0H49.7737C52.6601 0 55 2.33987 55 5.22624L55 41.6996C55 43.1291 54.4144 44.4962 53.3797 45.4825L44.9092 53.5567C43.9372 54.4832 42.646 55 41.3032 55L5.22625 55C2.33987 55 0 52.6601 0 49.7738V13.3004C0 11.8709 0.585555 10.5038 1.62029 9.51749L10.0908 1.44329Z'
								fill='#F2E5D4'
							/>
							<path
								d='M20 36L27 29M27 29L34 22M27 29L20 22M27 29L34 36'
								stroke='#231410'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</g>
						<defs>
							<clipPath id='clip0_812_583'>
								<rect width='55' height='55' fill='white' />
							</clipPath>
						</defs>
					</svg>
				</button>

				<h2>Залиште контакти,</h2>
				<p>щоб ми змогли надіслати вам актуальний каталог Terraform</p>
				<hr />
				<span>
					Це безплатно та ні до чого не зобов’язує, а відповідь ви отримаєте дуже
					швидко.{' '}
				</span>

				<form className={styles.form}>
					<input type='text' placeholder='Імʼя' />
					<div className={styles.form__flex}>
						<input type='tel' placeholder='+380' />
						<input type='email' placeholder='Email' />
					</div>
					<textarea
						name='textfield'
						placeholder='Сфера діяльності (дизайнер / магазин / прораб / HoReCa / інше)'
					/>

					<button type='submit' className={`${styles.btn}`}>
						<svg
							className={`${styles.btnImage}`}
							width='650'
							height='64'
							viewBox='0 0 650 64'
							preserveAspectRatio='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M30.6924 0.5H640C645.247 0.5 649.5 4.75329 649.5 10V36.3926C649.5 39.1778 648.278 41.8229 646.156 43.6279L625.464 61.2354C623.746 62.6972 621.563 63.5 619.308 63.5H10C4.7533 63.5 0.5 59.2467 0.5 54V27.6074C0.5 24.8222 1.72249 22.1771 3.84375 20.3721L24.5361 2.76465C26.2542 1.30278 28.4365 0.5 30.6924 0.5Z'
								stroke='#231410'
							/>
						</svg>

						<span>
							<svg
								className={`${styles.arrowdia} svg-arrow`}
								width='12'
								height='12'
								viewBox='0 0 12 12'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M2.19559 3.79275V8.25189L10.126 0.321525C10.3318 0.115651 10.6111 -4.39784e-06 10.9022 1.25424e-10C11.1934 4.39809e-06 11.4726 0.115669 11.6785 0.321548C11.8843 0.527427 12 0.806657 12 1.09781C12 1.38896 11.8843 1.66819 11.6785 1.87406L3.74808 9.80443H8.20725C8.4984 9.80443 8.77763 9.92009 8.9835 10.126C9.18938 10.3318 9.30504 10.6111 9.30504 10.9022C9.30504 11.1934 9.18938 11.4726 8.9835 11.6785C8.77763 11.8843 8.4984 12 8.20725 12H1.5183C0.516786 11.9816 0 11.335 0 10.4846V3.79277C0.00134087 3.5025 0.117592 3.22457 0.323323 3.01979C0.529055 2.815 0.807518 2.70004 1.0978 2.70004C1.38807 2.70004 1.66654 2.815 1.87227 3.01979C2.078 3.22457 2.19425 3.50247 2.19559 3.79275Z' />
							</svg>
							Завантажити каталог з цінами
						</span>
					</button>
				</form>
			</div>
		</div>
	);
}
