// Health Metrics Visualization

// Pain Relief Progress Chart
const painReliefCtx = document.getElementById('painReliefChart').getContext('2d');
const painReliefChart = new Chart(painReliefCtx, {
    type: 'doughnut',
    data: {
        labels: ['Relief Achieved', 'Target'],
        datasets: [{
            data: [75, 25],
            backgroundColor: [
                '#00843D',
                '#E0E0E0'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Activity Level Chart
const activityCtx = document.getElementById('activityLevelChart').getContext('2d');
const activityChart = new Chart(activityCtx, {
    type: 'radar',
    data: {
        labels: ['Walking', 'Exercise', 'Sports', 'Daily Tasks', 'Rest'],
        datasets: [{
            label: 'Current Week',
            data: [80, 65, 50, 85, 75],
            fill: true,
            backgroundColor: 'rgba(0, 132, 61, 0.2)',
            borderColor: '#00843D',
            pointBackgroundColor: '#00843D',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#00843D'
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(0, 132, 61, 0.1)'
                },
                grid: {
                    color: 'rgba(0, 132, 61, 0.1)'
                },
                pointLabels: {
                    font: {
                        size: 12
                    }
                },
                ticks: {
                    backdropColor: 'transparent'
                }
            }
        }
    }
});

// Recovery Timeline Chart
const timelineCtx = document.getElementById('recoveryTimeline').getContext('2d');
const timelineChart = new Chart(timelineCtx, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'Pain Level',
            data: [8, 7, 5, 4, 3, 2, 1],
            fill: true,
            backgroundColor: 'rgba(0, 132, 61, 0.1)',
            borderColor: '#00843D',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                ticks: {
                    stepSize: 1
                }
            }
        },
        plugins: {
            legend: {
                position: 'top'
            }
        }
    }
});
