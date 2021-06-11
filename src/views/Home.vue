<template>
  <div class="container">
    <div class="main">
      <h1>Virtual keyboard</h1>

      <textarea
        id="textarea"
        class="input"
        :value="text"
        autofocus
        placeholder="Tap on the virtual keyboard to start"
      />
      <Keyboard class="keyboard" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Keyboard from "../components/Keyboard/Keyboard.vue";
import { mapState } from "vuex";

@Component({
  components: {
    Keyboard,
  },
  computed: mapState(["text"]),
})
export default class Home extends Vue {
  text!: string;
}
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

.input {
  padding: 20px;
  font-size: 20px;
  width: 50%;
  min-width:  570px;
  min-height: 200px;
}

@media (max-width: 745px) {
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  box-sizing: border-box;
}

.main {
    width: 100%;
    padding: 10px;
    min-width: 400px;
}
 
.input {
  padding: 20px;
  font-size: 20px;
  width: 50%;
  min-width:  400px;
  min-height: 200px;
}

}

.main {
  width: 50%;
  min-width: 800px;
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
