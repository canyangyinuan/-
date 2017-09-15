<template>
	<div id="app">
		<transition :name="name">
			<router-view style="position: absolute;top: 0;left: 0;width: 100%;height:100%;overflow-x: hidden;"></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				historyPath: {
					type: String
				},
				name: ""
			}
		},
		watch: {
			$route(to, from) {
				this.name = to.path == this.historyPath ? "back" : "animation";
				this.historyPath = from.path;
			}
		}
	}
</script>

<style>
	/*animation*/
	#app{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.animation-enter {
		transform: translateX(100%);
	}
	
	.animation-enter-active {
		transition: 0.5s 0s;
	}
	
	.animation-leave-to {
		transform: scale(0.9);
	}
	
	.animation-leave-active {
		transition: 0.5s 0s;
	}
	/*back*/
	
	.back-enter {
		transform: scale(0.9);
	}
	
	.back-enter-to {
		transform: scale(1);
	}
	
	.back-enter-active {
		transition: 0.5s 0s;
	}
	
	.back-leave-to {
		transform: translateX(100%);
	}
	
	.back-leave-active {
		transition: 0.5s 0s;
	}
</style>