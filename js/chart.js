const ctx = document.getElementById('circle').getContext('2d');
const bar = document.getElementById('bar').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Youtube', 'Facebook', 'Google', 'Amazon'],
        datasets: [{
            label: 'Traffic sources',
            data: [1205, 1940, 3000, 2000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(130, 255, 60, 1)'
            ]
        }]
    },
    options: {
        scales: {
            y: {
                responsive: true,
            }
        }
    }
});

const myChart2 = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '# of Votes',
            data: [120, 195, 30, 57, 29, 34, 130, 250, 300, 87, 290, 340],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
        }]
    },
    options: {
        scales: {
            y: {
                responsive: true
            }
        }
    }
});
