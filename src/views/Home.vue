<template>
  <div class="container">
    <div class="main">
      <h1>Virtual keyboard</h1>
      <div class="inputText">TextArea</div>
      <Keyboard class="keyboard" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Keyboard from "../components/Keyboard/Keyboard.vue";
@Component({
  components: {
    Keyboard,
  },
})
export default class Home extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  box-sizing: border-box;
}

@media (max-width: 945px) {
  .main {
    width: 100%;
    padding: 20px;
    min-width: unset;
  }
}

.main {
  width: 50%;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.keyboard {
  display: flex;
  align-items: center;
  justify-content: center;
}
.inputText {
  margin-bottom: 20px;
}
</style>
