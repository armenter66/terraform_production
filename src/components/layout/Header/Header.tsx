'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../../assets/svg/logo.svg';
import styles from './Header.module.scss';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
			<div className='container'>
				<div className={`${styles.header__container}`}>
					<Link href='/'>
						<Image src={logo} alt='logo' width={150} height={39} />
					</Link>
					<nav className={`${styles.header__menu}`}>
						<Link href='/about'> Terraform Стіни </Link>
						<Link href='/catalog'> Terraform Підлога </Link>
						<Link href='/contact'> Партнери </Link>
						<Link href='/contact'> Контакти </Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
