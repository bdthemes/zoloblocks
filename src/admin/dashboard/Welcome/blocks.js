import SingleBlock from './single-block';

import { __ } from '@wordpress/i18n';

const BlocksWrapper = () => {
    return (
        <div className="zolo-welcome-s-k-wrap">
            <SingleBlock
                title={__('Get 24/7 Fastest Support', 'zoloblocks')}
                description={__(
                    'Concerned about your blocks? Our support team is ready to help you to get rid of your worries. Open chat right now.',
                    'zoloblocks'
                )}
                button={{
                    text: __('Get Support', 'zoloblocks'),
                    link: 'https://bdthemes.com/support/',
                }}
                button2={{
                    text: __('Knowledge Base', 'zoloblocks'),
                    link: 'https://bdthemes.com/knowledge-base-zoloblocks/',
                }}
                icon="support"
            />
        </div>
    );
};

export default BlocksWrapper;
