<template>
  <div class="rate">
    <img
      v-for="i in 5"
      :src="i > curNum ? 'https://s3.ssl.qhres2.com/static/d7a38af286390951.svg': 'https://s0.ssl.qhres2.com/static/919873c87afb0d36.svg'
      "
      alt=""
      :key="i"
      @mouseenter="change(i)"
      @mouseleave="clear"
      @click="confirm(i)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const curNum = ref(0);
let flag = true;
const change = (i) => {
  flag = true;
  curNum.value = i;
};
const clear = () => {
  if (flag) curNum.value = 0;
};
const confirm = (i) => {
  flag = false;
  curNum.value = i;
};
</script>

<style lang="scss" scoped>
.rate {
  cursor: pointer;
}
</style>
