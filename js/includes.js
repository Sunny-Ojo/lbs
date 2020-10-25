Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI ",Roboto,"Helvetica Neue ",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
Chart.defaults.global.default = '#292b2c';

var ctx = document.getElementById('duringMBA').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['were at "entry-level "', 'were at "mid-level "', 'were at "junior management level "'],
        datasets: [{
            label: 'BEFORE THE MBA',
            lineTension: 0.3,
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1) ",
            pointBorderColor: "rgba(255,255,255,0.8) ",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1) ",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data: [82, 12, 6],
            backgroundColor: [
                '#1B1464',
                '#6db1bf',
                '#3e6990',


            ],

            borderColor: [
                '#1B1464',
                '#6db1bf',
                '#3e6990',
                '#f6ae2d',

            ],
            borderWidth: 1,
            weight: 40
        }]
    },
    options: {

        title: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 2,
            display: true,
            text: 'BEFORE THE MBA',
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            fontSize: 22,
        },
    }
});
var ctx = document.getElementById('afterMBA').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['were at "entry-level "', 'were at "mid-level "', 'were at "junior management level "', 'were at "Executive level "'],
        datasets: [{
            label: 'AFTER THE MBA',
            data: [37, 50, 10, 3],
            backgroundColor: [
                '#1B1464',
                '#6db1bf',
                '#3e6990',
                '#f6ae2d',



            ],

            borderColor: [
                '#1B1464',
                '#6db1bf',
                '#3e6990',
                '#f6ae2d',

            ],
            borderWidth: 2
        }]
    },
    options: {
        title: {
            responsive: false,
            cutoutPercentage: 70,
            maintainAspectRatio: false,
            display: true,
            text: 'AFTER THE MBA',
            maintainAspectRatio: false,
            aspectRatio: 2,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },

            fontSize: 22,
        }


    }
});
var ctx = document.getElementById('afterEverything').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Accepted a new job offer after the MBA', 'Started a new Business', 'remained with the same employer'],
        datasets: [{
            label: 'Accepted a new job offer after the MBA ',
            data: [90, 7, 3],
            backgroundColor: [
                '#1B1464',
                '#6db1bf',
                '#3e6990',


            ],

            borderColor: [
                '#1B1464',
                '#6db1bf',
                '#3e6990',
                '#f6ae2d',

            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 2,
            display: true,
            text: 'Accepted a new job offer after the MBA',
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            fontSize: 22
        },


    }
});
$('.num').counterUp({
    delay: 100,
    time: 1000
});
var ctx = document.getElementById('success').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Below NGN200,000', 'NGN 201, 000–500,000', 'NGN 501,000 –800, 000', 'NGN 801, 000 – 1M', 'Above NGN 1M'],
        datasets: [{
            label: 'Salary Before MBA And Current Salary ',
            data: [87, 26, 31, 28, 15, 0],
            backgroundColor: [
                '#1B1464',
                '#6db1bf',
                '#3e6990',
                '#3e6990',
                '#3e6990',


            ],

            borderColor: [
                '#1B1464',
                '#6db1bf',
                '#3e6990',
                '#f6ae2d',
                '#f6ae2d',
                '#f6ae2d',

            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 2,
            display: false,
            text: 'Accepted a new job offer after the MBA',
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            fontSize: 24
        },


    }
});