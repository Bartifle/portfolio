import React from "react";
import personalInformations from "../../data/personalInformations";
import SocialIcons from "../Navbar/SocialIcons";
import "./Footer.scss";

const navLinks = [
    { label: "Home", to: "#main" },
    { label: "About", to: "#about" },
    { label: "Experiences", to: "#experiences" },
    { label: "Projects", to: "#projects" },
    { label: "Skills", to: "#skills" },
];

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-items">
                <span className="footer-logo">{personalInformations.name}</span>
                <span className="footer-copyright">&copy; {new Date().getFullYear()} All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
