import React from "react";
import { motion } from "framer-motion";
import personalInformations from "../../data/personalInformations";
import GlassCard from "../../components/GlassCard/GlassCard";
import "./Projects.scss";

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <motion.div
                className="projects-content"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <motion.h2
                    className="projects-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    Projects
                </motion.h2>
                <motion.div
                    className="title-underline"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                <div className="projects-list">
                    {personalInformations.projects.map((project, idx) => (
                        <motion.div
                            className="project-card"
                            key={project.name + idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.7 + idx * 0.1, ease: "easeOut" }}>
                            <GlassCard title={project.name} link={project.link} linkLabel="View on GitHub">
                                {project.image && (
                                    <img src={project.image} alt={project.name} className="project-img" />
                                )}
                                <div className="project-desc">
                                    <hr className="card-separator" />
                                    {project.description}
                                    <hr className="card-separator" />
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Projects;
