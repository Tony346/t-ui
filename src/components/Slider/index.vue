<template>
  <div class="slider">
    <div class="slider_line"></div>
    <div class="slider_btn"></div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.slider {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    height: 30px;
  &_line {
    width: 600px;
    height: 8px;
    background-color: #589ff8;
    border-radius: 4px;
  }
  &_btn{
    position: absolute;
    left: 0;
    top: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border:1px solid #589ff8;
    background-color: white;
  }
}
</style>
