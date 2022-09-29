<script>
	function realoadPage(){
		document.location.reload()
	}
</script>

<div class="pwa-toast" role="alert">
	<div class="message">
		<span>
			New content available, click on <button on:click={realoadPage}>reload</button> to update.
		</span>
	</div>
</div>


<style>
	.pwa-date {
		visibility: hidden;
	}
	.pwa-toast {
		position: fixed;
		right: 0;
		bottom: 0;
		margin: 16px;
		padding: 12px;
		border: 1px solid #8885;
		border-radius: 4px;
		z-index: 2;
		text-align: left;
		box-shadow: 3px 4px 5px 0 #8885;
		background-color: white;
	}
	.pwa-toast .message {
		margin-bottom: 8px;
	}
	.pwa-toast button {
		border: 1px solid #8885;
		outline: none;
		margin-right: 5px;
		border-radius: 2px;
		padding: 3px 10px;
	}
</style>
