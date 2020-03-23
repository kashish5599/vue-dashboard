<template>
	<div class="footer">
		My workspace <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
		<div class="footer-btns">
			<button class="update-notif btn btn-light" disabled>Updated 4 weeks ago</button>
			<button class="back-btn" disabled><i class="fa fa-undo-alt" aria-hidden="true"></i></button>
			<button class="forward-btn" disabled><i class="fa fa-redo-alt" aria-hidden="true"></i></button>
			<button class="btn btn-light export-btn">Export as report</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style scoped>
	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 999999;
		background: white;
		height: 8vh;
		border-top: 1px solid rgba(0, 0, 0, 0.2);
		padding: 0.5rem 0 0 5rem;
	}

	.footer-btns {
		float: right;
		min-width: 22%;
		padding: 0;
	}

	.update-notif {
		font-size: 0.6rem;
		border-radius: 10px;
		border-style: none;
		padding: 0.3rem;
	}

	.fupdate-notif, .export-btn {
		margin: 0 1% 0 2%;
	}

	.forward-btn {
		margin: 0 2% 0 0;
	}

	.back-btn {
		margin: 0 0 0 2%;
	}

	.export-btn {
		font-size: 0.8rem;
		padding: 2%;
		background: rgba(128, 128, 128, 0.1);
		border: 1px solid rgba(0, 0, 0, 0.3);
	}

</style>