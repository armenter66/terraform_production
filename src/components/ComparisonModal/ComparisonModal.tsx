'use client';

import { useEffect } from 'react';
import styles from './ComparisonModal.module.scss';

// Інтерфейс для пропсів
interface ComparisonModalProps {
	isOpen: boolean;
	onClose: () => void;
}

// Дані таблиці для чистоти коду
const tableData = [
	{ classic: 'Тижні монтажу', terraform: 'Години' },
	{ classic: 'Пил, вода, розчини, запахи', terraform: 'Сухий та чистий монтаж' },
	{ classic: 'Очікування поставок 4-6 тижнів', terraform: 'Все в наявності' },
	{ classic: 'Складний демонтаж', terraform: 'Демонтаж за годину' },
	{ classic: 'Складна логістика', terraform: 'Легка доставка і робота' },
];

export default function ComparisonModal({
	isOpen,
	onClose,
}: ComparisonModalProps) {
	// Блокуємо скрол фону, коли модалка відкрита
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className={styles.overlay} onClick={onClose}>
			{/* stopPropagation запобігає закриттю при кліку на саму таблицю */}
			<div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
				{/* Кнопка закриття */}
				<button className={styles.closeBtn} onClick={onClose}>
					✕
				</button>

				<h3 className={styles.title}>Порівняння матеріалів</h3>

				{/* Обгортка для рамки 14px */}
				<div className={styles.tableWrapper}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Класичні матеріали</th>
								<th>Terraform</th>
							</tr>
						</thead>
						<tbody>
							{tableData.map((row, index) => (
								<tr key={index}>
									<td>{row.classic}</td>
									<td>{row.terraform}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
