import { useState } from "react";
import {
    AiOutlineMenu as MenuIcon,
    AiOutlineClose as CloseIcon
} from "react-icons/ai";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="flex justify-between px-10 py-6 mb-6 bg-primary text-white fixed w-full z-10">
            <a href="/" className="logo text-4xl font-bold text-accent">
                Portfolio
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex">
                    <li>
                        <a href="/#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="/#projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="/#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>

            {/* Mobile Nav */}
            <nav
                className={!toggle ? "mobile-nav right-[-100%]" : "mobile-nav right-0"}
            >
                <ul className="flex flex-col gap-4">
                    <li>
                        <a href="/#about" onClick={handleToggle}>ABOUT</a>
                    </li>
                    <li>
                        <a href="/#projects" onClick={handleToggle}>PROJECTS</a>
                    </li>
                    <li>
                        <a href="/#contact" onClick={handleToggle}>CONTACT</a>
                    </li>
                </ul>
            </nav>

            {/* Toggle button */}
            <button onClick={handleToggle} className="block md:hidden">
                {!toggle ? <MenuIcon size={30} /> : <CloseIcon size={30} />}
            </button>
        </header>
    );
};

export default Header;