<template>
  <div class="section">
    <div class="container">
      <h2 class="title">template</h2>
      <pre v-highlightjs><code class="html">{{ template }}</code></pre>
      <br />
      <h2 class="title">script</h2>
      <pre v-highlightjs><code class="javascript">
import HorizontalBar from '~/components/horizontal-bar'
import Doughnut from '~/components/doughnut'

const pal = ['002b36', '073642', '586e75', '658b83', '839496', '93a1a1', 'eee8d5', 'fdf6e3'];

export default {
  components: {
    HorizontalBar,
    Doughnut
  },
  data(ctx) {
    return {
      tooltipModel: null,
      chartData: {
        labels: ["A組", "B組", "C組", "D組", "E組"],
        datasets: [
            {
                label: "英語",
                data: [ 80, 70, 50, 50, 50],
                borderColor:     '#' + pal[3],
                backgroundColor: '#' + pal[3],
            },
            {
                label: "数学",
                data: [ 90, 70, 60, 90, 80],
                borderColor:     '#' + pal[4],
                backgroundColor: '#' + pal[4],
            },
            {
                label: "国語",
                data: [ 50, 70, 80, 80, 70],
                borderColor:     '#' + pal[5],
                backgroundColor: '#' + pal[5],
            },
            {
                label: "理科",
                data: [ 90, 80, 70, 30, 40],
                borderColor:     '#' + pal[0],
                backgroundColor: '#' + pal[0],
            },
            {
                label: "社会",
                data: [ 80, 70, 90, 90, 90],
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
          // enabled: false,
          custom: ctx && ctx.setTooltipModel,
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
  },
  computed: {
    doughnutChartData() {
      if (!this.tooltipModel || !this.tooltipModel.dataPoints) {
        return
      }
      const data = this.tooltipModel.dataPoints.map(x => x.value)
      const chartData = {
        labels: ["英語", "数学", "国語", "理科", "社会"],
        datasets: [
          {
            backgroundColor: [
              '#' + pal[3],
              '#' + pal[4],
              '#' + pal[5],
              '#' + pal[0],
              '#' + pal[2],
            ],
            data,
          }
        ]
      }
      return chartData
    }
  },
  methods: {
    setTooltipModel(tooltipModel) {
      if (!tooltipModel.dataPoints) {
        return
      }
      this.tooltipModel = tooltipModel
    }
  }
}
      </code></pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const template = `
<template>
  <div class="section">
    <div class="container">
      <h1 class="title">vue-chart.js demo</h1>
      <div class="columns">
        <div class="column is-three-quarters">
          <HorizontalBar :chart-data="chartData" :options="options" style="height: 300px;" />
        </div>
        <div class="column">
          <Doughnut v-if="doughnutChartData" :chart-data="doughnutChartData" :options="{animation: {duration: 300}}" style="width: 300px; height: 300px;" />
        </div>
      </div>
      <div>tooltipModel: {{ tooltipModel }}</div>
    </div>
  </div>
</template>
`;
    return { template }
  }
}
</script>

<style scoped>
.movable {
  cursor: move;
}
p {
   transition: width 2s;
}
p, pre {
  font-size: 1.5em;
}
</style>
