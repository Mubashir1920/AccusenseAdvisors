'use client'
import {useEffect, useState} from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { BsArrowUp } from 'react-icons/bs';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return visible ? (
        <button
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-accent text-white shadow-lg"
        >
            <BsArrowUp size={24} />
        </button>
    ) : null;
};

export default ScrollToTop;
