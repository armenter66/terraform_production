'use client';
import { createContext, useContext, useState } from 'react';

type ModalContextType = {
	openModal: () => void;
	closeModal: () => void;
	isOpen: boolean;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return (
		<ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
}

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) throw new Error('useModal must be used inside ModalProvider');
	return context;
};
