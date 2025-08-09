import { useState, useEffect } from "react";
import { BsFillHouseDoorFill, BsPersonFill, BsBriefcaseFill, BsFolderFill, BsGearFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./VerticalTracker.scss";

const sections = [
    {
        label: "Home",
        to: "#main",
        icon: <BsFillHouseDoorFill />,
    },
    {
        label: "About",
        to: "#about",
        icon: <BsPersonFill />,
    },
    {
        label: "Exp",
        to: "#experiences",
        icon: <BsBriefcaseFill />,
    },
    {
        label: "Projects",
        to: "#projects",
        icon: <BsFolderFill />,
    },
    {
        label: "Skills",
        to: "#skills",
        icon: <BsGearFill />,
    },
];

function getCurrentSection() {
    const offsets = sections.map((s) => {
        const el = document.querySelector(s.to);
        return el ? el.getBoundingClientRect().top + window.scrollY : 0;
    });
    const scroll = window.scrollY + window.innerHeight / 3;
    let idx = 0;
    for (let i = 0; i < offsets.length; i++) {
        if (scroll >= offsets[i]) idx = i;
    }
    return idx;
}

function VerticalTracker() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const onScroll = () => setActive(getCurrentSection());
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (window.innerWidth < 900) return null;

    return (
        <motion.nav
            className="vertical-tracker"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}>
            <ul>
                {sections.map((section, idx) => (
                    <li key={section.to}>
                        <a
                            href={section.to}
                            tabIndex={0}
                            aria-label={section.label}
                            className={active === idx ? "active" : ""}>
                            <span className="icon">{section.icon}</span>
                            <span className="label">{section.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
}

export default VerticalTracker;
