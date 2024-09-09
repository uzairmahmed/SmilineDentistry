import { useEffect } from 'react';

const useParallax = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.bubble');
            const scrollTop = window.pageYOffset;

            elements.forEach((element) => {
                const htmlElement = element as HTMLElement; // Cast element to HTMLElement
                const speed = parseFloat(htmlElement.getAttribute('data-speed') || '0'); // Convert string to number
                const yPos = -(scrollTop * speed); // Now speed is a number
                htmlElement.style.transform = `translateY(${yPos}px)`; // Apply parallax effect
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

export default useParallax;
