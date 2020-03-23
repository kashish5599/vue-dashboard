<template>
	<nav class="navbar navbar-expand-lg">
		<ul class="navbar-nav">
			<li class="nav-item"><i class="fa fa-bars" aria-hidden="true"></i></li>
			<li class="nav-item"><i class="fa fa-search" aria-hidden="true"></i></li>
			<li class="nav-item">
				<ul class="filepath">	
					<li v-bind:key="folder.id" v-for="folder in filepath">
						<i v-if="folder.type != 'root'" class="fa fa-angle-right arrow" aria-hidden="true"></i>
						<span class="file-name">{{folder.title }}</span>
						<i v-if="folder.type == 'project-name'" class="fa fa-lock lock"></i>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'Navbar',
		props: ["filepath"]
	}
</script>

<style scoped>
	
	.navbar {
		background-color: #1A1C1F;
		color: #818283;
		z-index: 10000;
		position: fixed;
		width: 100%;
		height: 3rem;
	}

	.navbar i{
		font-size: 1.5em;
	}

	.nav-item {
		margin: 0 10px 0 10px;
		display: inline-block;
	}

	.filepath {
		list-style-type: none;
	}

	.filepath li, .filepath li * {
		display: inline-block;
	}

	li .arrow {
		margin: 0 10px 0 10px;
	}

	li .lock {
		margin: 0 0 0 5px;
	}


</style>