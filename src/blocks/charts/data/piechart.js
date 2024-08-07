const PieChartAttributes = {
    series: [44, 55, 13, 43, 22],
    options: {
        chart: {
            width: 380,
            type: 'pie',
            toolbar: {
                show: false,
                tools: {
                    download: false,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false,
                },
            },
        },
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
};

export default PieChartAttributes;
