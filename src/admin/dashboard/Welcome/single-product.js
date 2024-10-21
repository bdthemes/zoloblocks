import { __ } from '@wordpress/i18n';
const SingleProduct = ({ btnClass, btnText, btnUrl, btnTitle }) => {
    return (
        <a className={`zolo-welcome-page-btn ${btnClass}`} href={btnUrl} target="_blank" title={btnTitle}>
            <span className="zolo-pd-btn-text">{__(btnText, 'zoloblocks')}</span>
        </a>
    );
};

export default SingleProduct;
