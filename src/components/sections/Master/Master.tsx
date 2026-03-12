import Image from 'next/image';
import styles from './Master.module.scss';
import num1 from '@/assets/svg/01.svg';
import num2 from '@/assets/svg/02.svg';
import num3 from '@/assets/svg/03.svg';
import num4 from '@/assets/svg/04.svg';
import num5 from '@/assets/svg/05.svg';

export default function Master() {
	return (
		<section className={`${styles.master} pb-[100px]`}>
			<div className='container'>
				<div className={styles.master__container}>
					<h2>
						один{' '}
						<span>
							майстер <br />
							склад
						</span>
					</h2>
					<p>
						Коли інтер’єр збирається з багатьох різних матеріалів, зростає кількість
						підрядників, термінів і домовленостей. Кожен етап неминуче додає ризик
						затримок і перевитрат.
					</p>
				</div>

				<div className={`${styles.master__box}`}>
					{/* <svg viewBox='0 0 1170 320' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M86.6592 0.5H1138C1155.4 0.5 1169.5 14.603 1169.5 32V243.195C1169.5 252.633 1165.27 261.574 1157.97 267.557L1103.31 312.361C1097.68 316.977 1090.62 319.5 1083.34 319.5H32C14.603 319.5 0.499993 305.397 0.5 288V76.8047C0.500015 67.3669 4.7323 58.4264 12.0312 52.4434L66.6895 7.63867C72.3207 3.02263 79.3777 0.500002 86.6592 0.5Z'
							stroke='#231410'
						/>
					</svg> */}
					<div className={`${styles.master__box__header}`}>
						<h2>
							Terraform дозволяє <b>спростити</b> цю систему
						</h2>
						<div className={`${styles.master__box__header__item}`}>
							<Image src={num1} width={55} height={55} alt='num1' />
							<h4>Єдина логістика без розрізнених поставок (і все в наявності)</h4>
						</div>
					</div>
					<div className={`${styles.master__box__body}`}>
						<div className={`${styles.master__box__body__column1}`}>
							<div className={`${styles.master__box__body__item}`}>
								<Image src={num4} width={55} height={55} alt='num4' />
								<h4>
									Один склад — матеріал не потрібно шукати по різних постачальниках
								</h4>
							</div>
							<div className={`${styles.master__box__body__item}`}>
								<Image src={num5} width={55} height={55} alt='num5' />
								<h4>Один майстер замість кількох вузьких спеціалістів</h4>
							</div>
						</div>

						<div className={`${styles.master__box__body__column2}`}>
							<div className={`${styles.master__box__body__item}`}>
								<Image src={num2} width={55} height={55} alt='num2' />
								<h4>
									Ідеальна сумісність матеріалів (рівні стики, поєднання і фактури)  
								</h4>
							</div>
							<div className={`${styles.master__box__body__item}`}>
								<Image src={num3} width={55} height={55} alt='num3' />
								<h4>Узгоджені дедлайни без накладання етапів робіт</h4>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.master__footer}>
					<h3>SPC, який ви вже знаєте — тепер для стін</h3>
					<div className={styles.master__footer__desc}>
						Terraform переносить цю технологію з усіма її перевагами у вертикальну
						площину — на стіни. 
						<span>
							SPC-покриття уже сформувало репутацію на ринку підлогових матеріалів.
							Його обирають за стабільність, вологостійкість і прогнозований результат
							у щоденній експлуатації.
						</span>
						<h5>Перевірена технологія Нові можливості для дизайну</h5>
					</div>
				</div>
			</div>
		</section>
	);
}
