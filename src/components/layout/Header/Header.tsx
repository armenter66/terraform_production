'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../assets/svg/logo.svg';
import logoDark from '../../../assets/svg/logodark.svg';
import styles from './Header.module.scss';
import hamb from '@/assets/svg/hamburger.svg';
import hambDark from '@/assets/svg/hamburgerdark.svg';
import close from '@/assets/svg/close.svg';

export default function Header() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const isDarkTheme = pathname === '/thank-you';
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
			document.documentElement.style.overflow = '';
		}
	}, [menuOpen]);

	return (
		<header
			className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isDarkTheme ? styles.darkTheme : ''}`}
		>
			<div className='container'>
				<div className={`${styles.header__container}`}>
					<Link href='/'>
						<Image
							src={isDarkTheme ? logoDark : logo}
							alt='logo'
							width={150}
							height={39}
						/>
					</Link>
					{!menuOpen && (
						<button className={styles.burger} onClick={() => setMenuOpen(true)}>
							<Image
								src={isDarkTheme ? hambDark : hamb}
								alt='menu'
								width={40}
								height={40}
							/>
						</button>
					)}
					<nav className={`${styles.header__menu}`}>
						<Link href='/about'> Terraform Стіни </Link>
						<Link href='/catalog'> Terraform Підлога </Link>
						<Link href='/contact'> Партнери </Link>
						<Link href='/contact'> Контакти </Link>
					</nav>
					<div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
						<Link href='/'>
							<Image src={logoDark} alt='logo' width={150} height={39} />
						</Link>
						<button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
							<Image src={close} alt='close menu' width={40} height={40} />
						</button>
						<nav>
							<Link href='/about' onClick={() => setMenuOpen(false)}>
								Terraform Стіни
							</Link>
							<Link href='/catalog' onClick={() => setMenuOpen(false)}>
								Terraform Підлога
							</Link>
							<Link href='/partners' onClick={() => setMenuOpen(false)}>
								Партнери
							</Link>
							<Link href='/contact' onClick={() => setMenuOpen(false)}>
								Контакти
							</Link>
						</nav>
						<ul className={`${styles.header__social}`}>
							<li>
								<a href='https://www.instagram.com/terraform_ua/'>
									<svg
										width='50'
										height='50'
										viewBox='0 0 50 50'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<circle cx='25' cy='25' r='25' fill='#231410' />
										<path
											d='M29.3672 13.8203C30.9532 13.8203 32.4742 14.4503 33.5956 15.5718C34.7171 16.6933 35.3471 18.2143 35.3471 19.8003V29.3682C35.3471 30.9541 34.7171 32.4752 33.5956 33.5966C32.4742 34.7181 30.9532 35.3481 29.3672 35.3481H19.7993C18.2133 35.3481 16.6923 34.7181 15.5708 33.5966C14.4494 32.4752 13.8193 30.9541 13.8193 29.3682V19.8003C13.8193 18.2143 14.4494 16.6933 15.5708 15.5718C16.6923 14.4503 18.2133 13.8203 19.7993 13.8203H29.3672ZM24.5832 19.8003C23.3144 19.8003 22.0976 20.3043 21.2005 21.2014C20.3033 22.0986 19.7993 23.3154 19.7993 24.5842C19.7993 25.853 20.3033 27.0698 21.2005 27.967C22.0976 28.8641 23.3144 29.3682 24.5832 29.3682C25.852 29.3682 27.0688 28.8641 27.966 27.967C28.8632 27.0698 29.3672 25.853 29.3672 24.5842C29.3672 23.3154 28.8632 22.0986 27.966 21.2014C27.0688 20.3043 25.852 19.8003 24.5832 19.8003ZM24.5832 22.1922C25.2176 22.1922 25.826 22.4442 26.2746 22.8928C26.7232 23.3414 26.9752 23.9498 26.9752 24.5842C26.9752 25.2186 26.7232 25.827 26.2746 26.2756C25.826 26.7242 25.2176 26.9762 24.5832 26.9762C23.9488 26.9762 23.3404 26.7242 22.8918 26.2756C22.4433 25.827 22.1912 25.2186 22.1912 24.5842C22.1912 23.9498 22.4433 23.3414 22.8918 22.8928C23.3404 22.4442 23.9488 22.1922 24.5832 22.1922ZM29.9652 18.0063C29.648 18.0063 29.3438 18.1323 29.1195 18.3566C28.8952 18.5809 28.7692 18.8851 28.7692 19.2023C28.7692 19.5195 28.8952 19.8237 29.1195 20.0479C29.3438 20.2722 29.648 20.3982 29.9652 20.3982C30.2824 20.3982 30.5866 20.2722 30.8109 20.0479C31.0352 19.8237 31.1612 19.5195 31.1612 19.2023C31.1612 18.8851 31.0352 18.5809 30.8109 18.3566C30.5866 18.1323 30.2824 18.0063 29.9652 18.0063Z'
											fill='#FFF6E5'
										/>
									</svg>
								</a>
							</li>
							<li>
								<a href='https://www.facebook.com/terraform.ukraine'>
									<svg
										width='50'
										height='50'
										viewBox='0 0 50 50'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<circle cx='25' cy='25' r='25' fill='#231410' />
										<path
											d='M27.0827 26.5573H29.6868L30.7285 22.3906H27.0827V20.3073C27.0827 19.2344 27.0827 18.224 29.166 18.224H30.7285V14.724C30.3889 14.6792 29.1066 14.5781 27.7525 14.5781C24.9243 14.5781 22.916 16.3042 22.916 19.474V22.3906H19.791V26.5573H22.916V35.4115H27.0827V26.5573Z'
											fill='#FFF6E5'
										/>
									</svg>
								</a>
							</li>
							<li>
								<a href='#'>
									<svg
										width='50'
										height='50'
										viewBox='0 0 50 50'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<circle cx='25' cy='25' r='25' fill='#231410' />
										<path
											d='M29.7923 18.5625C29.0804 17.7495 28.688 16.7056 28.6882 15.625H25.4694V28.5417C25.4451 29.2408 25.1502 29.9032 24.6468 30.3891C24.1435 30.8749 23.4711 31.1463 22.7715 31.1458C21.2923 31.1458 20.0632 29.9375 20.0632 28.4375C20.0632 26.6458 21.7923 25.3021 23.5736 25.8542V22.5625C19.9798 22.0833 16.834 24.875 16.834 28.4375C16.834 31.9062 19.709 34.375 22.7611 34.375C26.0319 34.375 28.6882 31.7188 28.6882 28.4375V21.8854C29.9934 22.8228 31.5604 23.3257 33.1673 23.3229V20.1042C33.1673 20.1042 31.209 20.1979 29.7923 18.5625Z'
											fill='#FFF6E5'
										/>
									</svg>
								</a>
							</li>
							<li>
								<a href='#'>
									<svg
										width='50'
										height='50'
										viewBox='0 0 50 50'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<circle cx='25' cy='25' r='25' fill='#231410' />
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M35.9785 19.1927C35.8484 18.7055 35.5929 18.2609 35.2374 17.9032C34.8819 17.5455 34.4389 17.2873 33.9525 17.1542C32.166 16.6719 24.9993 16.6719 24.9993 16.6719C24.9993 16.6719 17.8327 16.6719 16.0462 17.1542C15.5598 17.2873 15.1168 17.5455 14.7613 17.9032C14.4058 18.2609 14.1503 18.7055 14.0202 19.1927C13.541 20.9927 13.541 24.7448 13.541 24.7448C13.541 24.7448 13.541 28.4969 14.0202 30.2969C14.1501 30.7843 14.4056 31.2291 14.7611 31.587C15.1166 31.9448 15.5597 32.2033 16.0462 32.3365C17.8337 32.8177 24.9993 32.8177 24.9993 32.8177C24.9993 32.8177 32.166 32.8177 33.9525 32.3365C34.439 32.2033 34.8821 31.9448 35.2376 31.587C35.5931 31.2291 35.8486 30.7843 35.9785 30.2969C36.4577 28.499 36.4577 24.7448 36.4577 24.7448C36.4577 24.7448 36.4577 20.9927 35.9785 19.1927ZM22.6556 21.3375V28.1521L28.6452 24.7448L22.6556 21.3375Z'
											fill='#FFF6E5'
										/>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
