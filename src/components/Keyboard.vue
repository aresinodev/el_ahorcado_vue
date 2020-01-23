<template lang="html">
    <div class="keyboard">
        <div :id="'key-' + key" class="keyboard-key" v-for="(letter, key) in alphabet"
             :key="key" @click="pressLetter(letter)">{{ letter }}</div>
    </div>
</template>

<script lang="js">
export default {
    name: "app-keyboard",
    props: {
        letterToPaint: {
            type: String
        }
    },
    data() {
        return {
            alphabet: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
        }
    },
    methods: {
        pressLetter: function (letter) {
					// El evento llamará a una función que estará en APP que pasará al componente "Word" la letra seleccionada.
          this.$emit('letterPressed', letter);
				},
				clearKeyboard: function() {
					for (let i = 0; i < this.alphabet.length; i++) {
						document.getElementById('key-' + i).style.color = '#000000';
					}
				}
    },
    watch: {
        letterToPaint: function (value) {
					if (value !== "") {
						let position = this.alphabet.indexOf(value);
            document.getElementById('key-' + position).style.color = '#FF0000';
					} else {
						this.clearKeyboard();
					}
        }
    },
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.keyboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    padding-left: 1em;

    &-key {
        width: 2em;
        height: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid get-color("black");
        border-radius: 25px;
        font-weight: bold;
        font-size: 2em;
        cursor: pointer;
        margin-right: .5em;
        margin-bottom: .5em;
    }
}
</style>
