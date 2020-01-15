<template>
  <div id="app">
    <app-header></app-header>
    <app-score :wins="5" :defeats="10"></app-score>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Score from '@/components/Score';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-score': Score
  }
}
</script>

<style lang="scss" scoped>
@import './styles/_variables.scss';

#app {
  width: 100vw;
  height: 100vh;
  background-color: get-color('white');
  margin: 0 auto;
}
</style>
