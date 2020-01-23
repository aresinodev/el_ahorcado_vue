<template lang="html">
    <div class="word-container">
        <div class="word-container-content">
            <span :id="'letter-' + key" class="line"
                  v-for="(item, key) in wordToArray"
                  :key="key">_</span>
        </div>
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
        return {}
    },
    computed: {
        wordToArray: function () {
            return Array.from(this.word.toUpperCase());
        }
    },
    methods: {
        letterPositions: function (letter) {
            let positionsArray = [];

            this.wordToArray.forEach((item, index) => {
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
        }
    },
    watch: {
        letterToCheck: function (value) {
            let positions = this.letterPositions(value);

            if (positions.length > 0) {
                positions.forEach(position => document.getElementById('letter-' + position).innerHTML = value);

                // TODO: Comprobar si se ha acertado la palabra, si es así, emitir evento que muestre mensaje de acierto.
                if (this.wordCorrect()) {
                    this.$emit('rightWord');
                }
            } else {
                this.$emit('letterError', value);
            }
				}
    },
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
