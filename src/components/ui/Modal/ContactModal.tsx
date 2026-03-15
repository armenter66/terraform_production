'use client';

import { useModal } from '@/context/ModalContext';
import styles from './ContactModal.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { IMaskInput } from 'react-imask';
import { useRouter } from 'next/navigation';

const schema = z.object({
	name: z.string().min(2, 'Введіть імʼя'),
	phone: z
		.string()
		.regex(/^\+380\d{9}$/, 'Телефон має бути у форматі +380XXXXXXXXX'),
	email: z.string().email('Некоректний email'),
	message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactModal() {
	const { isOpen, closeModal } = useModal();

	const router = useRouter();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			phone: '+380',
		},
	});

	if (!isOpen) return null;

	const onSubmit = async (data: FormData) => {
		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (res.ok) {
			closeModal();
			router.push('/thank-you');
		}
	};

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
					* Це безплатно та ні до чого не зобов’язує, а відповідь ви отримаєте дуже
					швидко.{' '}
				</span>

				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<input type='text' placeholder='Імʼя' {...register('name')} />

					{errors.name && <p>{errors.name.message}</p>}
					<div className={styles.form__flex}>
						<Controller
							name='phone'
							control={control}
							render={({ field }) => (
								<IMaskInput
									mask='+{380} 00 000 00 00'
									value={field.value || '+380'}
									onAccept={(value: any) =>
										field.onChange(String(value).replace(/\s/g, ''))
									}
									onBlur={field.onBlur}
									placeholder='+380'
									className={styles.input}
								/>
							)}
						/>
						{errors.phone && <p>{errors.phone.message}</p>}
						<input type='email' placeholder='Email' {...register('email')} />

						{errors.email && <p>{errors.email.message}</p>}
					</div>
					<textarea
						// name='textfield'
						placeholder='Сфера діяльності (дизайнер / магазин / прораб / HoReCa / інше)'
						{...register('message')}
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
							{isSubmitting ? 'Відправка...' : 'Завантажити каталог з цінами'}
						</span>
					</button>
				</form>
			</div>
		</div>
	);
}
