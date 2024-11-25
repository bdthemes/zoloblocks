export const supportedHeaders = [
  "core/heading",
  "zolo/advanced-heading",
  "essential-blocks/heading",
  "gutenverse/advanced-heading",
  "gutenkit/heading",
  "kadence/advancedheading",
  "qubely/heading",
  "ugb/header",
  "ugb/heading",
  "themeisle-blocks/advanced-heading"
];

export function isZoloBlocksAHeading(block) {
  return block.name === "zolo/advanced-heading";
}
export function isCoreHeading(block) {
  return block.name === "core/heading";
}
export function isEbHeading(block) {
  return block.name === "essential-blocks/heading";
}
export function isGutenverseHeading(block){
  return block.name === "gutenverse/advanced-heading";
}
export function isGutenKitHeading(block){
  return block.name === "gutenkit/heading";
}
export function isKadenceHeading(block) {
  return block.name === "kadence/advancedheading";
}
export function isQubelyHeading(block) {
  return block.name === "qubely/heading";
}
export function isStackableHeader(block) {
  return block.name === "ugb/header";
}
export function isStackableHeading(block) {
  return block.name === "ugb/heading";
}
export function isOtterHeading(block) {
  return block.name === "themeisle-blocks/advanced-heading";
}

export const createHierarchy = (formattedHeaders, currentHeader) => {
  const lastIndex = formattedHeaders.length - 1;

  if (formattedHeaders.length === 0 || formattedHeaders[0].level === currentHeader.level) {
    formattedHeaders.push({ ...currentHeader });
  } else if (formattedHeaders[lastIndex].level < currentHeader.level) {
    if (!formattedHeaders[lastIndex].children) {
      formattedHeaders[lastIndex].children = [{ ...currentHeader }];
    } else {
      createHierarchy(formattedHeaders[lastIndex].children, currentHeader);
    }
  }
};

export const formatHeaders = (allHeaders, allowedHeading) => {
  const formattedHeaders = [];
  allHeaders
    .filter((header) => allowedHeading[`h${header.level}`])
    .forEach((header) => createHierarchy(formattedHeaders, header));
  return formattedHeaders;
};

export const parseList = (list, ListTag = 'ul') =>
  list.map((item) => (
    <li key={item.anchor}>
      <a href={`#${item.anchor}`}>
        {item.content.replace(/(<.+?>)/g, '')}
      </a>
      {item.children && (
        <ListTag className="child-list">
          {parseList(item.children, ListTag)}
        </ListTag>
      )}
    </li>
  ));

export function parseTocSlug(slug) {
  if (!slug) return slug;

  return slug
    .toString()
    .toLowerCase()
    .replace(/(<.+?>)/g, '')
    .replace(/&(amp;|mdash;)/g, "")
    .replace(/[\u2013\u2014]/g, "")
    .replace(/&nbsp;/gi, "-")
    .replace(/\s+/g, "-")
    .replace(/[&\/\\#,^!+()$~%.'":*?<>{}@‘’”“]/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "");
}
