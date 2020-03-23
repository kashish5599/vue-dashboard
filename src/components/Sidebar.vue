<template>
	<nav class="col-md-1 bg-light sidebar">
		<div class="sidebar-sticky">
			<ul>
				<li :class="{'active':tab.active}" v-bind:key="tab.id" v-for="tab in tabs">
					<i :class=tab.icon></i>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Sidebar',
		props: ['tabs']
	}
</script>

<style scoped>

	.sidebar {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 100;
		max-width: 3.6rem;
		padding: 48px 0 0;
		box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
	}
	
	ul {
		list-style-type: none;
		margin: 0;
		width: 100%;
	}

	.active {
		background: #0080AC;
	}

	li i {
		width: 100%;
		font-size: 2em;
		padding: 15%;
		cursor: pointer;
	}

</style>