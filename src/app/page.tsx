import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import Master from '@/components/sections/Master/Master';
import Features from '@/components/sections/Features/Features';
import Solutions from '@/components/sections/Solutions/Solutions';
import Wall from '@/components/sections/Wall/Wall';
import Floor from '@/components/Floor/Floor';
import Benefits from '@/components/sections/Benefits/Benefits';
import Workslider from '@/components/sections/Workslider/Workslider';
import Partners from '@/components/sections/Partners/Partners';
import Catalog from '@/components/sections/Catalog/Catalog';

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Master />
			<Features />
			<Solutions />
			<Wall />
			<Floor />
			<Benefits />
			<Workslider />
			<Partners />
			<Catalog />
		</main>
	);
}
