<template>
	<div>
		<app-popup v-if="showPopup" :title="title" :subtitle="subtitle" :error="error"></app-popup>

		<div id="app">
			<app-header></app-header>
			<app-score :wins="wins" :defeats="defeats"></app-score>
			<app-picture :error="errors"></app-picture>
			<app-word :word="'coche'" :letterToCheck="letter" @letterError="letterError" @rightWord="rightWord"></app-word>
			<app-keyboard @letterPressed="letterPressed" :letterToPaint="letterToPaint"></app-keyboard>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header";
import Score from "@/components/Score";
import Picture from "@/components/Picture";
import Word from "@/components/Word";
import Keyboard from "@/components/Keyboard";
import InfoPopup from "@/components/InfoPopup";

export default {
	name: "app",
	components: {
		"app-header": Header,
		"app-score": Score,
		"app-picture": Picture,
		"app-word": Word,
		"app-keyboard": Keyboard,
		"app-popup": InfoPopup
	},
	data() {
		return {
			letter: "",
			letterToPaint: "",
			wins: 0,
			defeats: 0,
			errors: 0,
			showPopup: false,
			error: false,
			title: "",
			subtitle: "",
			wordOfMouth: "coche",
			errorNumber: 0
		};
	},
	methods: {
		letterPressed: function(value) {
			this.letter = value;
		},
		letterError: function(value) {
			this.errors += 1;
			console.log(this.errors);

			if (this.errors < 9) {
				this.letterToPaint = value;
			} else {
				this.title = this.$t("infoPopup.errorTitle");
				this.subtitle = this.$t("infoPopup.errorSubtitle", [this.wordOfMouth]);
				this.error = true;
				this.defeats += 1;
				this.showPopup = true;
			}
		},
		rightWord: function() {
			this.title = this.$t("infoPopup.correctTitle");
			this.subtitle = this.$t("infoPopup.correctSubtitle");
			this.error = false;
			this.wins += 1;
			this.showPopup = true;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "./styles/_variables.scss";

#app {
	width: 100vw;
	height: 100vh;
	background-color: get-color("white");
	margin: 0 auto;
}
</style>
