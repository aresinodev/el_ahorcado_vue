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
