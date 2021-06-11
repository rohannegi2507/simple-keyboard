<template>
  <div class="keyboardContainer">
    <div class="rows">
      <keyboardRow
        v-for="item in bigViewKeys"
        :key="item.id"
        :keys="item.data"
        class="row"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import keyboardRow from "./keyboardRow.vue";
import { mapState } from "vuex";
@Component({
  components: {
    keyboardRow,
  },
  computed: mapState(["bigViewKeys"]),
})
export default class Keyboard extends Vue {
  @Prop() private msg!: string;
  bigViewKeys!: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.keyboardContainer {
  transition: margin-top 1s ease-in-out 0.5s, opacity 1s ease-in-out 0.5s,
    width 0.3s linear;
  overflow: hidden;
  width: 100%;
  z-index: 3;
  max-width: 750px;
  font-size: 20px;
}

.rows {
  padding: 5px;
  background-color: rgb(233, 224, 224);
  border-radius: 5px;
}

.row:not(:last-child) {
  margin-bottom: 5px;
}

.row {
  display: flex;
}
</style>
