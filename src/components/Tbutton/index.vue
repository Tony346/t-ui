<template>
  <div class="button">
    <div class="button_text">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
const props = defineProps({
  tColor: {
    type: String,
    default: "#409EFF",
  },
  tWidth: {
    type: String,
    default: "100px",
  },
  tHeight: {
    type: String,
    default: "50px",
  },
  tDisabled: {
    type: Boolean,
    default: false,
  },
});
let cursorState = ref("pointer");
onMounted(() => {
//   if (props.tDisabled) {
//     cursorState.value = "not-allowed";
//   }
});
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: v-bind(tColor);
  border-radius: 4px;
  width: v-bind(tWidth);
  height: v-bind(tHeight);
  cursor: v-bind("tDisabled?'not-allowed':'pointer'");
  &_text {
    color: white;
  }
}
</style>
