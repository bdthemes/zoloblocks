export default function removeLink(setAttributes, setIsLinkOpen) {
    setAttributes({
        url: undefined,
        label: undefined,
        id: undefined,
        kind: undefined,
        type: undefined,
        opensInNewTab: false,
    });

    // Close the link editing UI.
    setIsLinkOpen(false);
}
