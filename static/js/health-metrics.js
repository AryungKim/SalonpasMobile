// Health Metrics Visualization with Islamic Pattern Integration

// Utility function to create gradient
function createGradient(ctx, colors) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    colors.forEach((color, index) => {
        gradient.addColorStop(index / (colors.length - 1), color);
    });
    return gradient;
}

// Setup Islamic pattern background
const patternImage = new Image();
patternImage.src = '/static/images/islamic-pattern-overlay.svg';

// Pain Relief Progress Chart with Islamic Pattern
const painReliefCtx = document.getElementById('painReliefChart').getContext('2d');
const painReliefGradient = createGradient(painReliefCtx, ['#00843D', '#006C32']);

patternImage.onload = function() {
    const pattern = painReliefCtx.createPattern(patternImage, 'repeat');

    const painReliefChart = new Chart(painReliefCtx, {
        type: 'doughnut',
        data: {
            labels: ['Relief Achieved', 'Target'],
            datasets: [{
                data: [75, 25],
                backgroundColor: [painReliefGradient, pattern],
                borderWidth: 0,
                borderRadius: 20,
                cutout: '85%'
            }]
        },
        options: {
            responsive: true,
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 2000,
                easing: 'easeInOutQuart'
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Add center text
    Chart.register({
        id: 'centerText',
        beforeDraw: (chart) => {
            const ctx = chart.ctx;
            ctx.save();
            ctx.font = 'bold 24px Poppins';
            ctx.fillStyle = '#00843D';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('75%', chart.canvas.width/2, chart.canvas.height/2);
            ctx.restore();
        }
    });
};

// Activity Level Chart with Islamic Pattern
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
            pointHoverBorderColor: '#00843D',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
        },
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
                        family: "'Traditional Arabic', 'Poppins', sans-serif",
                        size: 14
                    }
                },
                ticks: {
                    backdropColor: 'transparent',
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
});

// Recovery Timeline with Islamic Pattern
const timelineCtx = document.getElementById('recoveryTimeline').getContext('2d');
const timelineGradient = createGradient(timelineCtx, ['rgba(0, 132, 61, 0.1)', 'rgba(0, 132, 61, 0.05)']);

const timelineChart = new Chart(timelineCtx, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'Pain Level',
            data: [8, 7, 5, 4, 3, 2, 1],
            fill: true,
            backgroundColor: timelineGradient,
            borderColor: '#00843D',
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 6,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#00843D',
            pointBorderWidth: 2
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                ticks: {
                    stepSize: 1,
                    font: {
                        family: "'Traditional Arabic', 'Poppins', sans-serif"
                    }
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        family: "'Traditional Arabic', 'Poppins', sans-serif"
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});