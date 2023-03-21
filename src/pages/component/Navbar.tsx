import { useState, useEffect } from "react";
import RoutesLink from "./RoutesLink"
export const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);


    return (
        <nav className={`navbar ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
            <RoutesLink />
        </nav>
    )
}