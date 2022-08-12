<template>
  <div class="slider" @mouseup="cleanmove">
    <div class="slider_line" @mousedown="move"></div>
    <div
      class="slider_btn"
      @mouseenter="start"
      @mouseleave="clean"
      @mousedown="movebtn"
      @mouseup="cleanmove"
    ></div>
    <div class="slider_num">{{num}}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isActived = ref(false);
const offsetLeft = ref(0);
const num=ref(0)
const start = () => {
  isActived.value = true;
};
const clean = () => {
  isActived.value = false;
};
const move = (e) => {
  if (e.offsetX < 10) {
    offsetLeft.value = 0;
  } else {
    offsetLeft.value = e.clientX - 15 + "px";
  }

};
const movebtn = (e) => {
  const line=document.querySelector('.slider_line')
  offsetLeft.value = e.clientX - 15 + "px";
  window.addEventListener("mousemove", move);
  // num.value=
  console.log(line.style.width);
};
const cleanmove = () => {
  window.removeEventListener("mousemove", move);
};
</script>

<style lang="scss" scoped>
.slider {
  display: flex;
  align-items: center;
  // justify-content: center;
  position: relative;
  cursor: pointer;
  height: 50px;

  &_line {
    width: 600px;
    height: 8px;
    background-color: gray;
    border-radius: 4px;
  }

  &_btn {
    position: absolute;
    left: v-bind(offsetLeft);
    width: v-bind("isActived?'35px':'28px'");
    height: v-bind("isActived?'35px':'28px'");
    border-radius: 50%;
    border: 1px solid #589ff8;
    background-color: white;
    transition: 1s;

    &:hover {
      width: 35px;
      height: 35px;
    }
  }

  &_num {
    // display: v-bind("isActived?'block':'none'");
    width: 20px;
    height: 20px;
    background-color: black;
    color: aliceblue;
    line-height: 20px;
    text-align: center;
  }
}
</style>
