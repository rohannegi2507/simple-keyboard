<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./views/Home.vue";

@Component({
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  height: 100%;
  display: flex;
  justify-content: center;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: teal;
}

/* use viewport-relative units to cover page fully */
body {
  height: 100vh;
  width: 100vw;
}

/* include border and padding in element width and height */
* {
  box-sizing: border-box;
}
</style>
