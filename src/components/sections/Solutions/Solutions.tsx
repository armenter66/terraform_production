import styles from './Solutions.module.scss';

const cardsData = [
	{
		id: 1,
		text:
			'Кам’яно-полімерні покриття давно стали частиною сучасної архітектури. Їх використовують у приватних резиденціях Європи, готелях, авторських ресторанах і просторах, де важлива не лише естетика, а й довговічність та експлуатація без головного болю.',
	},
	{
		id: 2,
		text:
			'Архітектори обирають ці матеріали за чисту геометрію, глибокі фактури та можливість отримати преміальний вигляд без ускладнення проєкту.',
	},
	{
		id: 3,
		text:
			'Український ринок лише входить у цей етап, тоді як у багатьох країнах це вже ознака сучасного підходу до інтер’єру.',
	},
	{
		id: 4,
		text:
			'Terraform — це не про економію. Це про те, щоб отримати найсучасніше рішення для інтер’єру не за всі гроші світу.',
		isDark: true,
	},
];

export default function Solutions() {
	return (
		<section className={styles.solutions}>
			<div className='container'>
				<div className={styles.solutions__container}>
					<div className={styles.solutions__leftSide}>
						<h2 className={styles.solutions__title}>
							Рішення, які вже формують
							<span className={styles.solutions__highlight}>
								нову норму інтер’єрів
							</span>
						</h2>
					</div>

					<div className={styles.solutions__rightSide}>
						{cardsData.map((card, index) => (
							<div
								key={card.id}
								className={`${styles.solutions__card} ${card.isDark ? styles.darkCard : ''}`}
								style={{
									top: `calc(15vh + ${index * 45}px)`,
								}}
							>
								<p>{card.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
