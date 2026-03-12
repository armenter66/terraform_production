'use client';

import styles from './Workslider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Workslider() {
	return (
		<section className={styles.workslider}>
			<div className='container'>
				<h2>
					Terraform працює <span>для тих, хто рахує результат</span>
				</h2>
			</div>
			<div className={styles.sliderWrapper}>
				<Swiper
					modules={[Navigation]}
					spaceBetween={30}
					slidesPerView={2}
					navigation={{
						prevEl: '#work-prev',
						nextEl: '#work-next',
					}}
					className={styles.swiperContainer}
				>
					<SwiperSlide className={styles.slide}>
						<div className={`${styles.card} ${styles.cardCutBottomLeft}`}>
							<h3>Дизайнери та архітектори</h3>
							<p className={styles.p1}>
								Матеріали під замовлення ускладнюють реалізацію ідей і зривають
								терміни. 
							</p>
							<p className={styles.p2}>
								Матеріал у наявності, процес прогнозований, а колекція текстур дозволяє
								втілювати навіть складні дизайнерські рішення.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<div className={`${styles.card} ${styles.cardCutTopLeft}`}>
							<h3>HoReCa та комерційні простори</h3>
							<p className={styles.p1}>
								Кожен додатковий день ремонту відкладає відкриття і впливає на дохід. 
							</p>
							<p className={styles.p2}>
								Простір реалізується швидко, а нестандартні рішення залишаються
								доступними без надмірних витрат.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<div className={`${styles.card} ${styles.cardCutTopLeft}`}>
							<h3>Прораби та монтажні команди</h3>
							<p className={styles.p1}>
								Велика кількість процесів сповільнює об’єкт і збільшує ризик затримок. 
							</p>
							<p className={styles.p2}>
								Менше етапів у монтажі — стабільний темп робіт і більше завершених
								проєктів.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<div className={`${styles.card} ${styles.cardCutTopLeft}`}>
							<h3>Приватні клієнти</h3>
							<p className={styles.p1}>
								Ремонт часто затягується, створює безлад і виходить за межі бюджету. 
							</p>
							<p className={styles.p2}>
								Стіни готові протягом дня — чисто, швидко і без фінансового
								перевантаження.
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
				<div className={styles.navContainer}>
					<button id='work-prev' className={`${styles.navBtn} ${styles.navBtnPrev}`}>
						<svg
							width='55'
							height='55'
							viewBox='0 0 55 55'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.0908 1.44329C11.0627 0.516825 12.354 0 13.6968 0H49.7737C52.6601 0 55 2.33987 55 5.22624L55 41.6996C55 43.1291 54.4144 44.4962 53.3797 45.4825L44.9092 53.5567C43.9372 54.4832 42.646 55 41.3032 55L5.22625 55C2.33987 55 0 52.6601 0 49.7738V13.3004C0 11.8709 0.585555 10.5038 1.62029 9.51749L10.0908 1.44329Z'
								fill='#754437'
							/>
							<path
								d='M26.0139 31.633L22.7215 28.3406L34.4321 28.3406C34.7362 28.3406 35.0277 28.2198 35.2427 28.0049C35.4577 27.7899 35.5784 27.4983 35.5784 27.1943C35.5784 26.8903 35.4576 26.5987 35.2427 26.3838C35.0277 26.1688 34.7361 26.048 34.4321 26.0481L22.7215 26.0481L26.0139 22.7557C26.2288 22.5407 26.3496 22.2491 26.3496 21.9451C26.3496 21.6411 26.2288 21.3496 26.0139 21.1346C25.7989 20.9196 25.5073 20.7989 25.2033 20.7988C24.8993 20.7989 24.6078 20.9196 24.3928 21.1346L19.4541 26.0733C18.7282 26.8264 18.824 27.6853 19.4519 28.3132L24.3928 33.2541C24.6081 33.4674 24.8991 33.5868 25.2022 33.5861C25.5053 33.5854 25.7958 33.4647 26.0101 33.2503C26.2245 33.036 26.3452 32.7455 26.3459 32.4424C26.3466 32.1393 26.2272 31.8483 26.0139 31.633Z'
								fill='#FFF6E5'
							/>
						</svg>
					</button>
					<button id='work-next' className={`${styles.navBtn} ${styles.navBtnNext}`}>
						<svg
							width='55'
							height='55'
							viewBox='0 0 55 55'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.0908 1.44329C11.0627 0.516825 12.354 0 13.6968 0H49.7737C52.6601 0 55 2.33987 55 5.22624L55 41.6996C55 43.1291 54.4144 44.4962 53.3797 45.4825L44.9092 53.5567C43.9372 54.4832 42.646 55 41.3032 55L5.22625 55C2.33987 55 0 52.6601 0 49.7738V13.3004C0 11.8709 0.585555 10.5038 1.62029 9.51749L10.0908 1.44329Z'
								fill='#754437'
							/>
							<path
								d='M28.3733 31.633L31.6657 28.3406L19.9551 28.3406C19.651 28.3406 19.3595 28.2198 19.1445 28.0049C18.9296 27.7899 18.8088 27.4983 18.8088 27.1943C18.8088 26.8903 18.9296 26.5987 19.1445 26.3838C19.3595 26.1688 19.6511 26.048 19.9551 26.0481L31.6657 26.0481L28.3733 22.7557C28.1584 22.5407 28.0376 22.2491 28.0376 21.9451C28.0376 21.6411 28.1584 21.3496 28.3733 21.1346C28.5883 20.9196 28.8799 20.7989 29.1839 20.7988C29.4879 20.7989 29.7794 20.9196 29.9944 21.1346L34.9331 26.0733C35.659 26.8264 35.5632 27.6853 34.9353 28.3132L29.9944 33.2541C29.7791 33.4674 29.4881 33.5868 29.185 33.5861C28.8819 33.5854 28.5914 33.4647 28.3771 33.2503C28.1627 33.036 28.042 32.7455 28.0413 32.4424C28.0406 32.1393 28.16 31.8483 28.3733 31.633Z'
								fill='#FFF6E5'
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
