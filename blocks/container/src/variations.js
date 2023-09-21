const variations = [
    {
        name: 'one-column',
        title: 'One Column',
        icon: 'button',
        isDefault: true,
        scope: ['block'],
        attributes: {
            variationStatus: false,
        },
        innerBlocks: [
            [
                'zolo/column',
                {
                    width: 100,
                },
            ],
        ],
    },
    {
        name: 'two-column',
        title: 'Two Column',
        icon: 'plugins-checked',
        scope: ['block'],
        attributes: {
            variationStatus: false,
        },
        innerBlocks: [
            [
                'zolo/column',
                {
                    width: 50,
                },
            ],
            [
                'zolo/column',
                {
                    width: 50,
                },
            ],
        ],
    },
];

export default variations;
