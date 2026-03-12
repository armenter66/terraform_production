import '../styles/globals.scss';
import localFont from 'next/font/local';

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { ModalProvider } from '@/context/ModalContext';
import ContactModal from '@/components/ui/Modal/ContactModal';

const helvetica = localFont({
	src: [
		{
			path: '../assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Light.woff',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Medium.woff',
			weight: '550',
			style: 'normal',
		},
		{
			path: '../assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Roman.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Bold.woff',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-helvetica',
});

const cormorant = localFont({
	src: [
		{
			path: '../assets/fonts/Cormorant/CormorantGaramond-MediumItalic.ttf',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../assets/fonts/Cormorant/CormorantGaramond-BoldItalic.ttf',
			weight: '700',
			style: 'italic',
		},
	],
	variable: '--font-cormorant',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='uk' suppressHydrationWarning>
			<title>Terraform</title>
			<body className={`${helvetica.variable} ${cormorant.variable}`}>
				<ModalProvider>
					<Header />
					{children}
					<ContactModal />
					<Footer />
				</ModalProvider>
			</body>
		</html>
	);
}
