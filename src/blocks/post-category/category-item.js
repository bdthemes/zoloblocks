const { isEmpty, strToHex, DisplayZoloIcon, sanitizeText } = window.zoloModule;

function CategoryItem({ index, cat, attributes, multipleBgArray }) {
    const { preset, showCount, showText, showImage, viewAllBtn, postCategoryPro, itemTextLimit, viewAllBtnText, viewAllBtnIcon } =
        attributes;
    const { enableMultipleBG } = postCategoryPro ?? {};

    //set individual category background
    let bgColor = strToHex(cat.name);
    if (!isEmpty(multipleBgArray)) {
        bgColor = multipleBgArray[index];
    }

    const limitDescription = itemTextLimit > 0 ? cat.description.trim().split(' ', itemTextLimit).join(' ') : cat.description;
    return (
        <a className="zolo-category-item" href="#" style={enableMultipleBG ? { backgroundColor: bgColor } : {}}>
            {(preset === 'style-2' || preset === 'style-3') && showImage && !isEmpty(cat.image) && (
                <div className="zolo-category-img">
                    <img src={cat.image} alt="category image" />
                </div>
            )}

            <div className="zolo-content">
                <span className="zolo-category-name">{cat.name}</span>
                {showCount && <span className="zolo-category-count">{cat.count}</span>}
            </div>
            <div className="zolo-category-bottom-content">
                {showText && !isEmpty(limitDescription) && <p className="zolo-category-text">{limitDescription}</p>}

                {viewAllBtn && (
                    <span className="zolo-category-link">
                        {sanitizeText(viewAllBtnText)   }
                        <DisplayZoloIcon icon={viewAllBtnIcon} />
                    </span>
                )}
            </div>
        </a>
    );
}

export default CategoryItem;
