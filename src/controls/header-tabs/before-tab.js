import { withFilters } from '@wordpress/components';
const BeforeTab = (props) => {
    return props.children;
}

export default withFilters('zolo.header-tabs.before')(BeforeTab);
