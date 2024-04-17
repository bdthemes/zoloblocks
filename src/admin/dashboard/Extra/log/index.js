import { __ } from '@wordpress/i18n';

const SingleLog = ({ version, date, changes }) => {
    return (
        <div className="single-log">
            <div className="log-header">
                <h4 className="version">
                    {__('Version', 'zoloblocks')} {version}
                </h4>
                <p className="date">{date}</p>
            </div>
            <div className="log-body">
                {changes &&
                    changes.map((change, index) => {
                        return (
                            <div className="changes">
                                <h5 className="changes-title">{change.title && change.title}</h5>
                                <ul>
                                    {change.list &&
                                        change.list.map((item, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                </ul>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default SingleLog;
