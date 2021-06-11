import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const bigViewKeys = {
  row1: {
    id: 1,
    data: ["`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "backspace"],
  },
  row2: {
    id: 2,
    data: [
      "tab",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "U",
      "Y",
      "I",
      "O",
      "P",
      "[",
      "]",
      "\\",
    ],
  },
  row3: {
    id: 3,
    data: [
      "caps",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ":",
      '"',
      "enter",
    ],
  },
  row4: {
    id: 4,
    data: [
      "shift_l",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
      ",",
      ".",
      "/",
      "shift_r",
    ],
  },
  row5: {
    id: 5,
    data: [".com", "@", "space"],
  },
};

export const bigViewKeysWithCaps = {
  row1: {
    id: 1,
    data: [
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "+",
      "backspace",
    ],
  },
  row2: {
    id: 2,
    data: [
      "tab",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "{",
      "}",
      "|",
    ],
  },
  row3: {
    id: 3,
    data: [
      "caps",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      ";",
      "'",
      "enter",
    ],
  },
  row4: {
    id: 4,
    data: [
      "shift_l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      "<",
      ">",
      "?",
      "shift_r",
    ],
  },
  row5: {
    id: 5,
    data: [".com", "@", "space"],
  },
};

export default new Vuex.Store({
  state: {
    text: "",
    isCapsOrShiftOn: false,
    bigViewKeys,
  },
  mutations: {
    updateText(state, textValue) {
      state.text = textValue;
    },
    updateCapsFlag(state, flag) {
      state.isCapsOrShiftOn = flag;
    },
    updateKeyboardKeys(state) {
      if (state.isCapsOrShiftOn) {
        state.bigViewKeys = bigViewKeysWithCaps;
      } else {
        state.bigViewKeys = bigViewKeys;
      }
    },
    shuffleLetters(state) {
      const keys = JSON.parse(JSON.stringify(state.bigViewKeys));

      const array1 = [...keys["row1"].data];
      const subArr1 = [...array1.slice(0, array1.length - 1)];
      subArr1.sort(() => Math.random() - 0.5);
      subArr1.push(array1[array1.length - 1]);
      keys["row1"].data = subArr1;

      const array2 = [...keys["row2"].data];
      const subArr2 = [...array2.slice(1, array2.length)];
      subArr2.sort(() => Math.random() - 0.5);
      subArr2.unshift(array2[0]);
      keys["row2"].data = subArr2;

      const array3 = [...keys["row3"].data];
      const subArr3 = [...array3.slice(1, array3.length - 1)];
      subArr3.sort(() => Math.random() - 0.5);
      subArr3.push(array3[array3.length - 1]);
      subArr3.unshift(array3[0]);
      keys["row3"].data = subArr3;

      const array4 = [...keys["row4"].data];
      const subArr4 = [...array4.slice(1, array4.length - 1)];
      subArr4.sort(() => Math.random() - 0.5);
      subArr4.push(array4[array4.length - 1]);
      subArr4.unshift(array4[0]);
      keys["row4"].data = subArr4;

      state.bigViewKeys = keys;
    },
  },
  actions: {},
  modules: {},
});
