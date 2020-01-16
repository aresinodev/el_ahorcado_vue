<template>
  <div id="app">
    <app-header></app-header>
    <app-score :wins="wins" :defeats="defeats"></app-score>
    <app-picture></app-picture>
    <app-word :word="'coche'" :letterToCheck="letter"
              @letterError="letterError" @rightWord="rightWord"></app-word>
    <app-keyboard @letterPressed="letterPressed"
                  :letterToPaint="letterToPaint"></app-keyboard>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Score from '@/components/Score';
import Picture from '@/components/Picture';
import Word from "@/components/Word";
import Keyboard from "@/components/Keyboard";

export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-score": Score,
    "app-picture": Picture,
    "app-word": Word,
    "app-keyboard": Keyboard
  },
  data() {
    return {
      letter: '',
      letterToPaint: '',
      wins: 0,
      defeats: 0,
      errors: 0
    }
  },
  methods: {
    letterPressed: function (value) {
      this.letter = value;
    },
    letterError: function (value) {
      this.errors += 1;
      console.log(this.errors);

      if (this.errors < 9) {
        // TODO: Avisar que pinte parte del muñeco.
        this.letterToPaint = value;
      } else {
        /* TODO:
          - Mostramos mensaje de palabra acertada.
            En este popup, mostramos el mensaje y añadimos un botón para que diga el usuario si quiere otra nueva palabra o finalizar.
        */
        this.defeats += 1;
      }
    },
    rightWord: function () {
      /* TODO:
          - Mostramos mensaje de palabra acertada.
            En este popup, mostramos el mensaje y añadimos un botón para que diga el usuario si quiere otra nueva palabra o finalizar.
      */
      this.wins += 1;
    }
  }
}
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
