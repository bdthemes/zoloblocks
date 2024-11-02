/**
 * WordPress dependencies
 */

const ThumbsControl = (props) => {
    const {label, value, options, onChange, itemsPerRow = 2} = props;
    return (
        <div
            id={label}
            label={label}
            className={`zolo-thumbs-control zolo-thumbs-control-${itemsPerRow}`}
        >
            {options.map((option) => (
                <button
                    key={`zolo-thumbs-pircker-${option.value}`}
                    onClick={() => {
                        onChange(option.value);
                    }}
                    className={`zolo-thumbs-control-item ${value === option.value ? 'zolo-thumbs-active' : ''}`}
                >
                    {option.image && typeof option.image === 'string' ? (
                        <img src={option.image} alt={option.label || option.value} />
                    ) : null}
                    {option.image && typeof option.image !== 'string' ? option.image : ''}
                    {option.label ? <span>{option.label}</span> : ''}
                </button>
            ))}
        </div>
    );
};

export default ThumbsControl;
