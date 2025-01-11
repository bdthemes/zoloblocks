const usePostQuery = (attributes, setAttributes) => {
    return [
        attributes?.query,
        (value) => setAttributes({ query: { ...attributes?.query, ...value } }),
    ];
}
export default usePostQuery;