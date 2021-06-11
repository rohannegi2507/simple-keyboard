<template>
  <div class="row-container">
    <keyboardKey v-for="key in keys" :key="key" :name="key" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import keyboardKey from "./keyboardKey.vue";

@Component({
  components: {
    keyboardKey,
  },
})
export default class keyboardRow extends Vue {
  @Prop() private keys!: Array<string>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row-container {
  color: black;
  display: flex;
}
</style>
