<template>
  <div>
    <h1>Hello world!</h1>
    <BarChart :chart-data="chartData" :options="options" style="height: 300px;" />
  </div>
</template>

<script>
// import RandomChart from '~/components/random-chart'
import BarChart from '~/components/bar-chart'

const pal = ['002b36', '073642', '586e75', '658b83', '839496', '93a1a1', 'eee8d5', 'fdf6e3'];

export default {
  components: {
    // RandomChart,
    BarChart
  },
  data() {
    return {
      chartData: {
         labels: ["葬儀・葬式", "法事", "霊園・墓地", "終活", "遺品整理", "お盆"],
         datasets: [
             {
                 label: "記事",
                 data: [ 65636, 43499, 6460, 7600, 1651, 32847 ],
                 borderColor:     '#' + pal[3],
                 backgroundColor: '#' + pal[3],
             },
             {
                 label: "DB/EC",
                 data: [ 87659, 32734, 35827, 10369, 1879, 54208 ],
                 borderColor:     '#' + pal[4],
                 backgroundColor: '#' + pal[4],
             },
             {
                 label: "CGM",
                 data: [ 11577, 7159, 1139, 93, 22, 20158 ],
                 borderColor:     '#' + pal[5],
                 backgroundColor: '#' + pal[5],
             },
             {
                 label: "SNS",
                 data: [ 3, 0, 2527, 44, 79, 0 ],
                 borderColor:     '#' + pal[0],
                 backgroundColor: '#' + pal[0],
             },
             {
                 label: "公式",
                 data: [ 57912, 17151, 29258, 782, 0, 10911 ],
                 borderColor:     '#' + pal[2],
                 backgroundColor: '#' + pal[2],
             },
         ]
      },
			options: {
				title: {
					display: true,
					text: 'Chart.js Bar Chart - Stacked'
				},
				tooltips: {
					mode: 'index',
					intersect: false
				},
        responsive: true,
        maintainAspectRatio: false,
				scales: {
					xAxes: [{
						stacked: true,
					}],
					yAxes: [{
						stacked: true
					}]
				}
			}
    }
  }
}

</script>
