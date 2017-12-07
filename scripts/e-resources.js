$(function(){
  $(".filter-box__select select").chosen({disable_search_threshold: 10});
});
var leaseConfig = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [16,23,61],
                backgroundColor: [
                    'rgb(229, 76, 62)',
                    'rgb(238, 192, 24)',
                    'rgb(19, 184, 150)'
                ],
                label: 'Dataset 1',
				borderWidth:0,
            }],
            labels: [
                "Stuck",
                "Done",
                "WIP"
            ]
        },
        options: {
            responsive: true,
			
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
			cutoutPercentage:75,
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
var landConfig = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [22,16,62],
                backgroundColor: [
					'rgb(19, 184, 150)',
                    'rgb(238, 192, 24)',
					'rgb(229, 76, 62)'
                    
                ],
                label: 'Dataset 1',
				borderWidth:0,
            }],
            labels: [
                "WIP",
                "Done",
                "Stuck"
            ]
        },
        options: {
            responsive: true,
			
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
			cutoutPercentage:75,
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
var muncipalConfig = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [25,59,16],
                backgroundColor: [
					'rgb(19, 184, 150)',
                    'rgb(238, 192, 24)',
					'rgb(229, 76, 62)'
                    
                ],
                label: 'Dataset 1',
				borderWidth:0,
            }],
            labels: [
                "WIP",
                "Done",
                "Stuck"
            ]
        },
        options: {
            responsive: true,
			
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
			cutoutPercentage:75,
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
window.onload = function() {
	var leaseCtx = document.getElementById("lease-document").getContext("2d");
	window.myDoughnut = new Chart(leaseCtx, leaseConfig);
	var landCtx = document.getElementById("land-document").getContext("2d");
	window.myDoughnut = new Chart(landCtx, landConfig);
	var muncipalCtx = document.getElementById("muncipal-document").getContext("2d");
	window.myDoughnut = new Chart(muncipalCtx, muncipalConfig);
};
