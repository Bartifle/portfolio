import { motion } from "framer-motion";
import personalInformations from "../../data/personalInformations";
import FlipCard from "../../components/FlipCard/FlipCard";
import "./Skills.scss";

const skillCategories = [
    { key: "systemOps", label: "System & Ops" },
    { key: "development", label: "Development" },
    { key: "methodologies", label: "Methodologies" },
    { key: "languages", label: "Programming" },
    { key: "softSkills", label: "Soft Skills" },
    { key: "speaking", label: "Languages" },
];

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <motion.div
                className="skills-content"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <motion.h2
                    className="skills-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    Skills
                </motion.h2>
                <motion.div
                    className="title-underline"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                <div className="skills-list">
                    {skillCategories.map((category) => (
                        <FlipCard
                            category={category}
                            className="skill-card"
                            front={<div className="skill-label">{category.label}</div>}
                            back={
                                <ul className="skill-items">
                                    {personalInformations.skills[category.key].map((skill) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                                </ul>
                            }
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Skills;
