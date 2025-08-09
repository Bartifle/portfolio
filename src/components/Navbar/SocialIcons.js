import { BsGithub, BsLinkedin } from "react-icons/bs";

import personalInformations from "../../data/personalInformations";
import "./SocialIcons.scss";

const icons = {
    github: <BsGithub />,
    linkedin: <BsLinkedin />,
};

function SocialIcons({ className = "" }) {
    return (
        <div className={`social-icons ${className}`}>
            {personalInformations.socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`icon-link icon-${social.icon}`}
                    aria-label={social.name}>
                    {icons[social.icon]}
                </a>
            ))}
        </div>
    );
}

export default SocialIcons;
