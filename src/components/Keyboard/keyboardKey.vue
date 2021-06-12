<template>
  <div
    :class="[button, specialButton]"
    :style="specialButtonStyle"
    @click="pressed()"
  >
    {{ name }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: mapState(["text", "isCapsOrShiftOn"]),
})
export default class keyboardKey extends Vue {
  @Prop() private name!: string;
  button = "button";
  text!: string;
  isCapsOrShiftOn!: boolean;
  specialButton = "standardButton";

  created() {
    if (this.specialButtonStyle()) {
      this.specialButton = this.name;
    }
  }

  specialButtonStyle(): boolean {
    switch (this.name) {
      case "shift_l":
        return true;
      case "shift_r":
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

  pressed(): void {
    switch (this.name) {
      case "backspace":
        this.$store.commit(
          "updateText",
          this.text.substring(0, this.text.length - 1)
        );
        break;
      case "space":
        this.$store.commit("updateText", this.text + " ");
        break;
      case "tab":
        this.$store.commit("updateText", this.text + "  ");
        break;
      case "enter":
        this.$store.commit("updateText", this.text + "\n");
        break;
      case "caps":
        this.updateKeyboardKeys();
        break;
      case "shift_l":
        this.updateKeyboardKeys();
        break;
      case "shift_r":
        this.updateKeyboardKeys();
        break;
      default:
        this.$store.commit("updateText", this.text + this.name);
    }
    if (this.name.match(/^[A-Za-z]+$/)) {
      this.$store.commit("shuffleLetters");
    }
  }

  updateKeyboardKeys():void {
    this.$store.commit("updateCapsFlag", !this.isCapsOrShiftOn);
    this.$store.commit("updateKeyboardKeys");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  background: black;
  border-bottom: 1px solid #b5b5b5;
  border-radius: 5px;
  box-shadow: 0 0 3px -1px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: white;
  font-size: 15px;
  margin-right: 5px;
  flex-grow: 1;
  height: 40px;
}

.standardButton {
  width: 30px;
}

.caps {
  width: 60px;
}

.shift_l {
  width: 80px;
}

.shift_r {
  width: 80px;
}

.backspace {
  width: 100px;
}

.enter {
  width: 60px;
}

.space {
  width: 450px;
}

.tab {
  width: 45px;
}
</style>
