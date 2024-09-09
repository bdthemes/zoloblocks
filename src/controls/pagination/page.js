// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

class Page extends Component {
    render() {
        const { className, isCurrent, isDots, children, pageKey, onClick } = this.props;

        const classes = classnames(className, { current: isCurrent }, { dots: isDots });
        return (
            <a className={classes} onClick={() => onClick()}>
                {__(children)}
            </a>
        );
    }
}

Page.defaultProps = {
    isCurrent: false,
    isDots: false,
    className: '',
};
Page.propTypes = {
    isCurrent: PropTypes.bool,
    className: PropTypes.string,
    key: PropTypes.string,
    isDots: PropTypes.bool,
    onClick: PropTypes.func,
};
export default Page;
