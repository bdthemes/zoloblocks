const {isEmpty, strToHex} = window.zoloModule;

function CategoryItem({index, cat, attributes, multipleBgArray}) {
  const {
    showCount,
    tagCloudPro,
  } = attributes;
  const { enableMultipleBG } = tagCloudPro ?? {};

  //set individual category background
  let bgColor = strToHex(cat.name);
  if (!isEmpty(multipleBgArray)) {
    bgColor = multipleBgArray[index];
  }
  return (
      <a className="zolo-item" href="#" style={enableMultipleBG ? { backgroundColor: bgColor } : {}}>
          <span className="zolo-name">{cat.name}</span>
          {showCount && <span className="zolo-count">{cat.count}</span>}
      </a>
  );
}

export default CategoryItem;
