import React from "react";
import "./FlipCard.scss";
import { motion } from "framer-motion";
import GlassCard from "../../components/GlassCard/GlassCard";

function FlipCard({ category, front, back, className = "" }) {
    return (
        <motion.div
            className={`flip-card ${className}`.trim()}
            tabIndex={0}
            key={category.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}>
            <div className="flip-card-inner">
                <GlassCard className="flip-card-front">{front}</GlassCard>
                <GlassCard className="flip-card-back">{back}</GlassCard>
            </div>
        </motion.div>
    );
}

export default FlipCard;
