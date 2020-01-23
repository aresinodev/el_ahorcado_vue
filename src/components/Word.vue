<template lang="html">
    <div class="word-container">
        <div class="word-container-content"></div>
    </div>
</template>

<script lang="js">
export default {
    name: "app-word",
    props: {
        word: {
            type: String,
            required: true
        },
        letterToCheck: {
            type: String
        }
    },
    data() {
        return {
            wordInArray: []
				}
    },
    methods: {
        letterPositions: function (letter) {
            let positionsArray = [];

            this.wordInArray.forEach((item, index) => {
                if (item === letter) {
                    positionsArray.push(index);
                }
            });

            return positionsArray;
        },
        wordCorrect: function () {
            let elements = document.getElementsByClassName('line');
            let approved = true;

            elements.forEach(item => {
                if (item.innerHTML === '_') {
                    approved = false;
                }
            });

            return approved;
        },
				addWordIntoShape: function () {
						let content = document.getElementsByClassName("word-container-content")[0];
						let contentHTML = "";
						for (let i = 0; i < this.wordInArray.length; i++) {
						    contentHTML += `<span id="letter-${ i }" class="line" key="${ i }">_</span>`;
						}
						content.innerHTML = contentHTML;
        }
    },
    watch: {
        letterToCheck: function (value) {
            if (value !== "") {
                let positions = this.letterPositions(value);

                if (positions.length > 0) {
                    positions.forEach(position => document.getElementById('letter-' + position).innerHTML = value);

                    if (this.wordCorrect()) {
                        this.$emit('rightWord');
                    }
                } else {
                    this.$emit('letterError', value);
                }
            }
				},
				word: function (value) {
            document.getElementsByClassName("word-container-content")[0].innerHTML = "";
						this.wordInArray = Array.from(value.toUpperCase());
						this.addWordIntoShape();
        }
    }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.word-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;

    &-content {
        width: 90%;
        height: 60px;
        border: 1px solid get-color("black");
        display: flex;
        justify-content: space-around;
        align-items: center;

        .line {
            font-weight: bold;
            font-size: 2.5em;
        }
    }
}
</style>
