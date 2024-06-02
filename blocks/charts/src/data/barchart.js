const barChartAttributes = {
    options: {
        chart: {
            type: 'bar',
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
            width: 380,
        },
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
    series: [
        {
            name: 'label 1',
            data: [30, 40, 35, 50, 200, 210, 100, 49, 60, 70, 91, 125],
        },
        {
            name: 'label 2',
            data: [35, 45, 50, 60, 220, 235, 120, 55, 65, 75, 96, 130],
        },
        {
            name: 'label 3',
            data: [45, 55, 60, 70, 240, 255, 130, 65, 75, 85, 106, 140],
        },
    ],
};

export default barChartAttributes;
