import SingleBlock from './single-block';

import { __ } from '@wordpress/i18n';

const BlocksWrapper = () => {
    return (
        <div className="zolo-welcome-s-k-wrap">
            <SingleBlock
                title={__('Get 24/7 Fastest Support', 'zoloblocks')}
                description={__('Concerned about your blocks? Our support team is ready to help you to get rid of your worries. Open chat right now.', 'zoloblocks')}
                button={{
                    text: __('Get Support', 'zoloblocks'),
                    link: 'https://bdthemes.com/support/',
                }}
                icon="support"
            />

            <SingleBlock
                title={__('Knowledge Base', 'zoloblocks')}
                description={__('Explore the features, use cases, and customizations of Zoloblocks modules with step-by-step documentations and video tutorials.', 'zoloblocks')}
                button={{
                    text: __('View Knowledge Base', 'zoloblocks'),
                    link: 'https://bdthemes.com/knowledge-base/',
                }}
                icon="knowledgeBase"
            />

            <SingleBlock
                title={__('Join the Community', 'zoloblocks')}
                description={__("Start your journey with our thriving WordPress Lover's community and expand your connections, get new feature updates, or ask experts.", 'zoloblocks')}
                button={{
                    text: __('Join Now', 'zoloblocks'),
                    link: 'https://www.facebook.com/zoloblocks',
                }}
                icon="community"
            />
        </div>
    );
};

export default BlocksWrapper;
