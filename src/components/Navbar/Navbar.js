import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.scss";
import personalInformations from "../../data/personalInformations";
import SocialIcons from "./SocialIcons";

const navLinks = [
    { label: "Home", to: "#main" },
    { label: "About", to: "#about" },
    { label: "Experiences", to: "#experiences" },
    { label: "Projects", to: "#projects" },
    { label: "Skills", to: "#skills" },
];

function Navbar() {
    const [open, setOpen] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const navRef = useRef(null);

    useLayoutEffect(() => {
        if (navRef.current) {
            setNavHeight(navRef.current.offsetHeight);
        }
    }, []);

    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = () => setOpen(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        const navbar = document.querySelector(".navbar");

        if (element) {
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const handleNavClick = (link) => {
        const id = link.to.replace("#", "");
        scrollToSection(id);
        handleClose();
    };

    return (
        <>
            <nav className="navbar" ref={navRef}>
                <div className="navbar__logo">{personalInformations.siteTitle}</div>
                <div className="navbar__socials">
                    <SocialIcons />
                </div>
                <button
                    className={`navbar__hamburger${open ? " open" : ""}`}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="navbar-drawer"
                    onClick={handleToggle}
                    style={{ zIndex: 202 }}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </nav>
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="navbar__drawer"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{ zIndex: 201, top: navHeight, height: `calc(100vh - ${navHeight}px)` }}>
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.to}>
                                        <button onClick={() => handleNavClick(link)} className="nav-link-btn">
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            className="navbar__drawer-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={handleClose}
                            style={{ zIndex: 200, top: navHeight, height: `calc(100vh - ${navHeight}px)` }}
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
