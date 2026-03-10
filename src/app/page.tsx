import Hero from '@/components/sections/Hero/Hero';
import styles from './page.module.scss';
import About from '@/components/sections/About/About';

export default function Home() {
	return (
		<div>
			<main>
				<Hero />
				<About />
			</main>
		</div>
	);
}
