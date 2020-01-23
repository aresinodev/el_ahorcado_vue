<template lang="html">
	<div class="init-container">
		<span class="title">{{ $t("init.title") }}</span>
		<button class="play" type="button" @click="beginGame()">{{ $t("init.play") }}</button>
	</div>
</template>

<script lang="js">
export default {
	name: "Init",
	data() {
			return {}
	},
	methods: {
		beginGame: function() {
			this.$emit("beginGame");
		}
	},
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

.init-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
	justify-content: flex-start;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
	z-index: 9999;

	.title {
		padding-top: 4em;
		color: get-color("white");
		font-weight: bold;
		font-size: 5rem;
		text-shadow: -4px 0 black, 0 4px black, 4px 0 black, 0 -4px black;
	}

	.play {
		border: 5px dashed get-color("black");
		background-color: get-color("white");
		color: get-color("black");
		text-transform: uppercase;
		font-weight: bold;
		font-size: 3em;
		margin-top: 1em;
		cursor: pointer;
		outline: none;
		padding: .5em;
	}
}
</style>
