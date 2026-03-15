import Image from 'next/image';
import Link from 'next/link';
import styles from './NotFound.module.scss';
import notbg from '@/assets/img/404bg.webp';

export default function NotFound() {
	return (
		<main className={styles.notFoundPage}>
			{/* Ліва частина з фотографією */}
			<div className={styles.imageSide}>
				{/* Замініть шлях на ваше реальне фото інтер'єру */}
				<Image
					src={notbg}
					alt='Сторінку не знайдено'
					fill
					className={styles.bgImage}
					priority
				/>
			</div>

			{/* Права частина з контентом */}
			<div className={styles.contentSide}>
				<div className={styles.contentInner}>
					<h1 className={styles.title}>
						Ця сторінка
						<br />
						більше не є<br />
						частиною
						<br />
						проєкту
					</h1>

					<div className={styles.card}>
						<p className={styles.text}>
							Можливо, її було переміщено
							<br />
							або вона втратила актуальність.
							<br />
							Пропонуємо повернутися
							<br />
							до матеріалів, які формують
							<br />
							сучасні інтер’єри.
						</p>

						<Link href='/' className={styles.outlineBtn}>
							<span className={styles.btnInner}>↙ Перейти на головну</span>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
