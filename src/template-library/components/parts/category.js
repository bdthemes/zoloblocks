import classNames from 'classnames';

const CategoryList = ({ categories, activeCat, setActiveCat, items }) => {
    console.log('items', items);

    return (
        <>
            {categories &&
                categories.length > 0 &&
                categories.map((category) => (
                    <button
                        key={category.value}
                        className={classNames('single-category', { active: activeCat === category.value })}
                        onClick={() => setActiveCat(category.value)}
                    >
                        <span className="single-category-text">{category.label}</span>
                        <span className="single-category-count">
                            {items &&
                                (category.value === 'all'
                                    ? items.length
                                    : items.filter((template) => template.categories.includes(category.label)).length)}
                        </span>
                    </button>
                ))}
        </>
    );
};

export default CategoryList;
