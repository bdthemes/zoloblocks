import attributes from './attributes';

const deprecated = {
    attributes: {
        ...attributes,
        progressValue: {
            type: 'number',
            default: 50,
        },
        progressDuration: {
            type: 'number',
            default: 3,
        },
        progressTitle: {
            type: 'string',
            default: 'Total',
        },
        progressFillColor: {
            type: 'string',
            default: '#e5e5e5',
        },
        progPieMultiColor: {
            type: 'array',
            default: [
                {
                    id: 1,
                    color: '#2667ff',
                },
            ],
        },
        progPiePrefixPostfix: {
            type: 'object',
            default: {
                Prefix: '$',
                Postfix: '%',
            },
        },
    },
};
export default deprecated;
