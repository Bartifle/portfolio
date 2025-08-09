import { motion } from "framer-motion";
import personalInformations from "../../data/personalInformations";
import "./Main.scss";

function Main() {
    return (
        <section id="main" className="main-section">
            <motion.div
                className="main-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <motion.h1
                    className="main-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    {personalInformations.name}
                </motion.h1>
                <motion.div
                    className="title-underline"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                <h2 className="main-role">{personalInformations.title}</h2>
                <p className="main-intro">{personalInformations.shortIntro}</p>
            </motion.div>
        </section>
    );
}

export default Main;
