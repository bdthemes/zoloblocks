const Skeleton = ({ count = 1 }) => {
    return (
        <div className="skeleton-container">
            {[...Array(count)].map((_, i) => (
                <div key={i} className="skeleton-control"></div>
            ))}
        </div>
    )
};

export default Skeleton;