import { useEffect } from 'react';

const useParallax = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.bubble');
            const scrollTop = window.pageYOffset;

            elements.forEach((element) => {
                const speed = element.getAttribute('data-speed');
                const yPos = -(scrollTop * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

export default useParallax;
