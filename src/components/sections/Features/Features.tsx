import styles from './Features.module.scss';
import Image from 'next/image';
import terra from '@/assets/svg/terraform.svg';

export default function Features() {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className={styles.features__box}>
					<ul className={styles.features__list}>
						<li>
							<span>01</span>Сухий монтаж без тривалих ремонтних процесів
						</li>
						<li>
							<span>02</span>Без вираженого запаху після монтажу
						</li>
						<li>
							<span>03</span>Матеріал у наявності без тижнів очікування
						</li>
						<li>
							<span>04</span>Без формальдегідів — безпечний для житлових просторів
						</li>
						<li>
							<span>05</span>Раціональніша вартість — до 45% вигідніше за комбінацію
							традиційних матеріалів
						</li>
					</ul>
					<Image src={terra} width={185} height={29} alt='terra' className={styles.features__terra}/>
				</div>
			</div>
		</section>
	);
}
