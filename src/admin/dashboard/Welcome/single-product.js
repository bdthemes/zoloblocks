const SingleProduct = ({ btnClass, btnText, btnUrl, btnTitle }) => {
    return (
        <a className={`zolo-welcome-page-btn ${btnClass}`} href={btnUrl} target="_blank" title={btnTitle}>
            {btnText}
        </a>
    );
};

export default SingleProduct;
