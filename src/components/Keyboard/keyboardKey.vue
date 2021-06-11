<template>
  <div :class="[button, specialButton]" :style="specialButtonStyle">
    {{ name }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class keyboardKey extends Vue {
  @Prop() private name!: string;
  button = "button";
  specialButton = "standardButton";
  created() {
    if (this.specialButtonStyle()) {
      this.specialButton = this.name;
      console.log(this.specialButtonStyle(), this.name);
    }
  }
  specialButtonStyle(): boolean {
    switch (this.name) {
      case "shift":
        return true;
      case "caps":
        return true;
      case "tab":
        return true;

      case "space":
        return true;
      case "backspace":
        return true;
      case "enter":
        return true;
    }
    return false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #b5b5b5;
  border-radius: 5px;
  box-shadow: 0 0 3px -1px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  padding: 5px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 300;
  font-size: 20px;
  font-size: 17px;
  margin-right: 5px;
  flex-grow: 1;
}

.standardButton {
  width: 20px;
}
.caps {
  width: 35px;
}

.shift {
  width: 50px;
}
.backspace {
  width: 80px;
}

.enter {
  width: 45px;
}

.space {
  width: 250px;
}

.tab {
  width: 23px;
}

.shift {
  width: 35px;
}
</style>
