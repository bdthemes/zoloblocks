import VideoSection from './video';
import BlocksWrapper from './blocks';
import FooterWrapper from './footer';
const Welcome = () => {
    return (
        <div className="zolo-welcome-page-wrap">
            <div className="zolo-welcome-video-and-others-wrap">
                <VideoSection
                    title="Welcome to Zoloblocks"
                    description={
                        <>
                            You now have the power to dominate in Gutenberg and show-off your web design skills! No experience needed, no
                            codes included. Just drag, drop, customize, and hit Publish. Enjoy! Learn about Zoloblocks by
                            <a href="https://youtu.be/jX4sIXG-9fo?list=PLP0S85GEw7DPpFyon1kxBZ8H1Ei7GK1yX" target="_blank">
                                {' '}
                                Exploring Block{' '}
                            </a>
                            Videos here and from the{' '}
                            <a href="https://zoloblocks.com/" target="_blank">
                                {' '}
                                Homepage
                            </a>
                            .
                        </>
                    }
                    videoInfo={{
                        id: 'jX4sIXG-9fo',
                        title: 'Zoloblocks Features Walkthrough - Get a Glance at the Features | BdThemes',
                        thumbnail: 'https://img.youtube.com/vi/jX4sIXG-9fo/maxresdefault.jpg',
                    }}
                    // buttons={[
                    //     {
                    //         text: 'More Videos',
                    //         link: '#',
                    //         type: 'primary',
                    //     },
                    //     {
                    //         text: 'Visit Our Website',
                    //         link: 'https://zoloblocks.com',
                    //         type: 'secondary',
                    //     },
                    // ]}
                />
                <BlocksWrapper />
            </div>
            <FooterWrapper />
        </div>
    );
};

export default Welcome;
