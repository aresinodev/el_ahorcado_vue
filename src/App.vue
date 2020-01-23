<template>
	<div>
		<app-init v-if="showInit" @beginGame="beginGame"></app-init>
		<app-popup v-if="showPopup" :title="title" :subtitle="subtitle" :error="error" @newWord="newWord" @newGame="beginGame" @initGame="initGame"></app-popup>

		<div id="app">
			<app-header @restartGame="beginGame"></app-header>
			<app-score :wins="wins" :defeats="defeats"></app-score>
			<app-picture :error="errors"></app-picture>
			<app-word :word="wordOfMouth" :letterToCheck="letter" @letterError="letterError" @rightWord="rightWord"></app-word>
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
import Init from "@/components/Init";

import words from "./words";

import utils from "./utils";

export default {
	name: "app",
	components: {
		"app-header": Header,
		"app-score": Score,
		"app-picture": Picture,
		"app-word": Word,
		"app-keyboard": Keyboard,
		"app-popup": InfoPopup,
		"app-init": Init
	},
	data() {
		return {
			letter: "",
			letterToPaint: "",
			wins: 0,
			defeats: 0,
			errors: 0,
			showPopup: false,
			showInit: false,
			error: false,
			title: "",
			subtitle: "",
			wordOfMouth: "",
			errorNumber: 0,
			words: null
		};
	},
	methods: {
		letterPressed: function(value) {
			this.letter = value;
		},
		letterError: function(value) {
			this.errors += 1;

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
		},
		beginGame: function() {
			this.reset();
			this.words = words.words;
			this.wordOfMouth = this.getWordOfMouth();
			this.showInit = false;
		},
		reset: function() {
			this.showInit = false;
			this.letter = "";
			this.letterToPaint = "";
			this.wins = 0;
			this.defeats = 0;
			this.errors = 0;
			this.showPopup = false;
			this.error = false;
			this.title = "";
			this.subtitle = "";
			this.wordOfMouth = "";
			this.errorNumber = 0;
			this.words = null;
		},
		getWordOfMouth: function() {
			let random = utils.getRandomArbitrary(0, this.words.length);
			return this.words[random];
		},
		newWord: function() {
			this.showPopup = false;
			this.letter = "";
			this.letterToPaint = "";
			this.errors = 0;
			this.error = false;
			this.errorNumber = 0;
			this.wordOfMouth = this.getWordOfMouth();
		},
		initGame: function() {
			this.reset();
			this.showInit = true;
		}
	},
	created() {
		this.reset();
		this.showInit = true;
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
