import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  es: {
    header: {
      title: "El ahorcado",
      restart: "Reiniciar"
    },
    score: {
      wins: "Victorias:",
      defeats: "Derrotas:"
    },
    infoPopup: {
      correctTitle: "Palabra acertada",
      errorTitle: "Palabra errónea",
      correctSubtitle: "¡¡Enhorabuena!! Ha acertado la palabra.",
      errorSubtitle: "¡¡Oh, lo siento!! No ha acertado la palabra. La palabra era {0}.",
      finish: "Finalizar",
      newWord: "Nueva palabra",
      newGame: "Nueva partida"
		},
		init: {
			title: "El ahorcado",
			play: "Jugar"
		}
  },
  en: {
    header: {
      title: "The hangman",
      restart: "Restart"
    },
    score: {
      wins: "Wins:",
      defeats: "Defeats:"
    }
  }
};

const i18n = new VueI18n({
  locale: "es",
  fallbackLocale: "en",
  messages
});

export default i18n;
