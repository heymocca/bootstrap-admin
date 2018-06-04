
// Line chart
var ctx1 = document
	.getElementById( 'line' )
	.getContext( '2d' );
var myLineChart = new Chart( ctx1, {
	type: 'line',
	data: {
		labels: ["Jan",	"Feb", "March",	"April", "May"],
		datasets: [
			{
				label: 'Business Loans',
				data: [
					12,
					19,
					3,
					5,
					2,
					3
				],
				borderWidth: 1,
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: [ 'rgba(255,99,132,1)' ]
			},

            {
				label: 'Livestock Finance',
				data: [
					7,
					11,
					5,
					8,
					3,
					7
				],
				borderWidth: 1,
				backgroundColor: ['rgba(54, 162, 235, 0.2)'],
				borderColor: [ 'rgba(54, 162, 235, 1)' ]
			},
            {
				label: 'Personal Finance',
				data: [
					22,
					11,
					15,
					34,
					20,
					9
				],
				borderWidth: 1,
				backgroundColor: ['rgba(255, 206, 86, 0.2)'],
				borderColor: [ 'rgba(255, 206, 86, 1)' ]
			},
            {
				label: 'Livestock Finance',
				data: [
					21,
					10,
					6,
					17,
					13,
					27
				],
				borderWidth: 1,
				backgroundColor: ['rgba(75, 192, 192, 0.2)'],
				borderColor: [ 'rgba(255, 206, 86, 1)' ]
			}
		]
	},
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						reverse: false
					}
				}
			]
		}
	}
} );

// Half doughnut chart
var ctx2 = document
	.getElementById( "doughnut" )
	.getContext( '2d' );
var myChart = new Chart( ctx2, {
	type: 'doughnut',
	data: {
		labels: [
			"Business Loans", "Livestock Finance", "Personal Loans", "Savings & Deposit"
		],
		datasets: [
			{
				label: '',
				data: [
					12, 19, 30, 25
				],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)'
				],
				borderWidth: 1
			}
		]
	},
	options: {
		rotation: 1 * Math.PI,
		circumference: 1 * Math.PI
	}
} );

// Bar chart
var ctx3 = document
	.getElementById( 'bar' )
	.getContext( '2d' );
var myBarChart = new Chart( ctx3, {
	type: 'bar',
	data: {
		labels: ["Jan",	"Feb", "March",	"April", "May"],
		datasets: [
			{
				label: 'Business Loans',
				data: [12, 19, 3, 5, 8],
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255,99,132,1)',
				borderWidth: 1
			},
            {
				label: 'Livestock Finance',
				data: [11, 18, 2, 4, 28],
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1
			},
            {
				label: 'Personal Loans',
				data: [22, 21, 14, 24, 36],
				backgroundColor: 'rgba(255, 206, 86, 0.2)',
				borderColor: 'rgba(255, 206, 86, 1)',
				borderWidth: 1
			},
            {
				label: 'Savings & Deposit',
				data: [25, 28, 12, 34, 47],
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1
			},
		]
	},
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					}
				}
			]
		}
	}
} );
