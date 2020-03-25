<template>
	<div class="content">
		<div class="accordian" id="stats-accord">
			<div class="card">
				<div class="card-header" id="card1">
					<div class="collapsed" data-toggle="collapse" data-target="#card-content1" aria-expanded="false" aria-controls="card-content1">
						<span class="open"><i class="fa fa-caret-down"></i></span>
						<span class="close"><i class="fa fa-caret-right"></i></span>
					</div>
					<span class="header-text">CUSTOM VISUALIZATIONS</span>
					<button type="button" class="btn btn-primary card-btn">Add a visualisation</button>
				</div>
				<div id="card-content1" class="collapse" aria-labelledby="card1" data-parent="#stats-accord">
					<div class="card-body">
						Sample content
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header" id="card2">
					<span data-toggle="collapse" data-target="#card-content2" aria-expanded="true" aria-controls="card-content2">
						<span class="open"><i class="fa fa-caret-down"></i></span>
						<span class="close"><i class="fa fa-caret-right"></i></span>
					</span>
					<span class="header-text">AUTO VISUALISATIONS</span>
					<div class="search-bar col-md-2">
						<input type="text" placeholder="Search">
						<button class="btn search-btn" type="button"><i class="fa fa-search"></i></button>
					</div>
					<button><i class="las la-wave-square"></i></button>
					<button><i class="las la-chart-bar"></i></button>
					<button><i class="las la-braille"></i></button>
				</div>
				<div id="card-content2" class="collapse show" aria-labelledby="card2" data-parent="#stats-accord">
					<div class="card-body">
						<div class="card bg-light">
							<div class="card-header">
								<i class="fa fa-caret-down" aria-hidden="true"></i>
								CHARTS (5)
							</div>
							<div class="collapse show">
								<div class="card-body">
									<div class="charts">
										<LineChart 
											v-for="graph in graphdata" 
											v-bind:data="graph.query" 
											:mouseHover="mouseHover" 
											:lineData="lineData"
											:showLine="showLine" 
											v-bind:key="graph.id" 
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import LineChart from './LineChart.vue'

	export default {
		name: 'Content',
		components: {
			LineChart
		},
		methods: {
			mouseHover(e) {
				if (e) {
					this.showLine = true
					this.lineData = e
					// console.log(this)
				}
			}
		},
		data() {
			let graphs = []
			let alph = ["A", "B", "C", "D", "E", "F"]
			for (let i=1; i <= 5; i++) {
				graphs[i-1] = {
					"id": i,
					"query": "select A, " + alph[i]
				}
			}
			return {
				graphdata: graphs,
				showLine: false,
				lineData: {}
			}
		}
	}
</script>

<style scoped>

	.content {
    position: fixed;
    left: 3.6rem;
    top: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 40px 0 0;
    width: calc(100vw - 3.6rem);
    overflow: auto;
  }

  .collapsed > .open,
	:not(.collapsed) > .close {
		display: none;
	}

	.header-text {
		padding-left: 0.5rem
	}

  #card1 .card-btn {
		font-size: 0.8rem;
		float: right;
  }

	.card-header * {
		display: inline-block;
		line-height: 100%;
		vertical-align: middle;
	}

	.search-bar {
		border: 1px solid rgba(0, 0, 0, 0.2);
		background-color: white;
		padding: 0 0 0 1rem;
		margin: 0 1% 0 1%;
		color: grey;
		border-radius: 5px;
	}

	.card-header button {
		margin: 0 0.2rem 0 0.2rem;
		font-size: 1.1rem;
	}

	.search-bar input {
		border: none;
		width: 80%;
		outline: none;
	}

	.search-bar button {
		width: 20%;
		margin: 0;
		font-size: 1rem;
	}

	.charts {
		display: flex;
		flex-wrap: wrap;
	}

	.charts * {
		margin: 1.2rem;
	}

</style>