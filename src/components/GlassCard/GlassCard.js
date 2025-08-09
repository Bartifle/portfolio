import "./GlassCard.scss";

function GlassCard({ title, children, className = "", link, linkLabel = "View More" }) {
    return (
        <div className={`glass-card ${className}`.trim()}>
            {title && (
                <>
                    <div className="title">
                        <div>{title}</div>
                    </div>
                </>
            )}
            {children}
            {link && (
                <>
                    <div className="card-footer">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="card-footer-btn">
                            {linkLabel}
                        </a>
                    </div>
                </>
            )}
        </div>
    );
}

export default GlassCard;
