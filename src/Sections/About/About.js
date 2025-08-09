import { motion } from "framer-motion";
import personalInformations from "../../data/personalInformations";
import "./About.scss";

function About() {
    return (
        <section id="about" className="about-section">
            <motion.div
                className="about-content"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <motion.h2
                    className="about-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    About Me
                </motion.h2>
                <motion.div
                    className="title-underline"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                <p className="about-text">{personalInformations.about}</p>
            </motion.div>
        </section>
    );
}

export default About;
