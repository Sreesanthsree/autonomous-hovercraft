
function initializeCharts() {
    const speedCtx = document.getElementById('speedChart').getContext('2d');
    const batteryCtx = document.getElementById('batteryChart').getContext('2d');
    const temperatureCtx = document.getElementById('temperatureChart').getContext('2d');

    new Chart(speedCtx, {
        type: 'line',
        data: {
            labels: ['0s', '1s', '2s', '3s', '4s', '5s'],
            datasets: [{
                label: 'Speed (km/h)',
                data: [0, 20, 40, 60, 80, 100],
                borderColor: '#4caf50',
                fill: false
            }]
        },
        options: {
            responsive: true,
        }
    });

    new Chart(batteryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Used', 'Remaining'],
            datasets: [{
                data: [30, 70],
                backgroundColor: ['#ff5722', '#4caf50']
            }]
        },
        options: {
            responsive: true,
        }
    });

    new Chart(temperatureCtx, {
        type: 'bar',
        data: {
            labels: ['Motor', 'Processor', 'Ambient'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [50, 65, 30],
                backgroundColor: ['#ff9800', '#ff5722', '#4caf50']
            }]
        },
        options: {
            responsive: true,
        }
    });
}

initializeCharts();