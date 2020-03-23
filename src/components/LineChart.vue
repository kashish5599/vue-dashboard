<template>
	<GChart 
		type="LineChart"
		@ready="onChartReady"
	/>
</template>

<script>
	import { GChart } from 'vue-google-charts'

	export default {
		props: ["data"],
		components: {
			GChart
		},
		methods: {
			onChartReady (chart, google) {
				// console.log(this.data)
				// let data = google.visualization.arrayToDataTable(this.data, false)
				// const options = {
				// 	"title": this.data[0][1],
				// 	"width": "400",
				// 	"height": "200"
				// }
				// console.log(data)
				// chart.draw(data, options)
				const query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1GFnIMoF2nSmyFSb0SRBtISIeI8Md69Z-82-vvQ8MUkY/edit?usp=sharing')
				query.setQuery(this.data)
				query.send(response => {
					const data = response.getDataTable()
					data.addColumn({type: 'string', role: 'tooltip'})
					const options = {
						title: data.Ff[1].label,
						width: "400",
						height: "200",
						legend: 'none',
						crosshair: {
							trigger: 'both',
							orientation: 'vertical'
						},
						hAxis: {
							title: 'Step',
							gridlines: { count: 4, color: 'transparent' }
						},
						vAxis: {
							gridlines: { count: 6 },
							minorGridlines: { count: 0 }
						}
					}
					chart.draw(data, options)
				})
			}
		}
	}
</script>

<style>

</style>