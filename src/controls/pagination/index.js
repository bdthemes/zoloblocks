import PropTypes from 'prop-types';
import { Component } from '@wordpress/element';
import Page from './page';
import { __ } from '@wordpress/i18n';
export default class Pagination extends Component {
    render() {
        const { total, current, prevText, nextText, baseClassName, onClickPage } = this.props;

        if (!total) {
            return null;
        }

        let endSize = this.props.endSize < 1 ? 1 : this.props.endSize;
        let midSize = this.props.midSize < 0 ? 2 : this.props.midSize;

        let dots = false;

        let pages = [];

        if (current && current > 1) {
            pages.push({
                isCurrent: false,
                key: 'prev',
                onClick: () => onClickPage(current - 1),
                className: 'page-numbers prev',
                text: prevText||__('Prev','zoloblocks'),
            });
        }

        for (let n = 1; n <= this.props.total; n++) {
            let isCurrent = n === current;

            if (isCurrent) {
                dots = true;
                pages.push({
                    isCurrent: true,
                    key: n,
                    onClick: () => onClickPage(n),
                    className: 'page-numbers',
                    text: n,
                });
            } else {
                if (n <= endSize || (current && n >= current - midSize && n <= current + midSize) || n > total - endSize) {
                    pages.push({
                        isLink: true,
                        key: n,
                        onClick: () => onClickPage(n),
                        className: 'page-numbers',
                        text: n,
                    });
                    dots = true;
                } else if (dots) {
                    pages.push({
                        isDots: true,
                        key: n,
                        onClick: () => 'dots',
                        className: 'page-numbers',
                        text: '...',
                    });
                    dots = false;
                }
            }
        }

        if (current && current < total) {
            pages.push({
                isCurrent: false,
                key: 'next',
                onClick: () => onClickPage(current + 1),
                className: 'page-numbers next',
                text: nextText||__('Next','zoloblocks'),
            });
        }

        return (
            <div className={baseClassName}>
                {pages.map(({ isCurrent, key, text, className, onClick, isDots, isLink }) => (
                    <Page
                        isCurrent={isCurrent}
                        key={key}
                        pageKey={key}
                        onClick={() => onClick()}
                        className={className}
                        isDots={isDots}
                        isLink={isLink}
                    >
                        {text}
                    </Page>
                ))}
            </div>
        );
    }
}

Pagination.defaultProps = {
    total: 0,
    current: 1,
    prevText: 'Prev',
    nextText: 'Next',
    endSize: 1,
    midSize: 2,
    baseClassName: 'zolo-pagination-nav',
};

Pagination.propTypes = {
    total: PropTypes.number,
    current: PropTypes.number,
    prevText: PropTypes.string,
    nextText: PropTypes.string,
    endSize: PropTypes.number,
    midSize: PropTypes.number,
    baseClassName: PropTypes.string,
    onClickPage: PropTypes.func,
};
