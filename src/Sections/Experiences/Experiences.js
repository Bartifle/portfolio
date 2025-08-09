import { motion } from "framer-motion";
import personalInformations from "../../data/personalInformations";
import GlassCard from "../../components/GlassCard/GlassCard";
import "./Experiences.scss";

function Experiences() {
    return (
        <section id="experiences" className="experiences-section">
            <motion.div
                className="experiences-content"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <motion.h2
                    className="experiences-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    Experiences
                </motion.h2>
                <motion.div
                    className="title-underline"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                <div className="experiences-list">
                    {personalInformations.experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.company + idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.7 + idx * 0.1, ease: "easeOut" }}>
                            <GlassCard className="experience-card">
                                <div className="exp-header">
                                    <span className="exp-role">{exp.role}</span>
                                    <span className="exp-company">@{exp.company}</span>
                                </div>
                                <div className="exp-period">{exp.period}</div>
                                <div className="exp-info">
                                    <div className="exp-job">
                                        {exp.description.map((line) => (
                                            <div>• {line}</div>
                                        ))}
                                    </div>
                                    {exp.learned && (
                                        <div className="exp-learned">
                                            <b>What I learned:</b>{" "}
                                            {exp.learned.map((line) => (
                                                <div>• {line}</div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Experiences;
