<template>
  <div>
    <div class="cascader">
      <div class="cascader_input" @click="isActived = !isActived">
        <div class="cascader_input_text">请选择</div>
        <img
          src="https://s1.ssl.qhres2.com/static/4d0b13fe69c14bb6.svg"
          alt=""
        />
      </div>
      <div v-show="isActived">选择区</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
onMounted(() => {
  const cascader = document.querySelector(".cascader");
  document.addEventListener("click", (e) => {
    if (!cascader.contains(e.target)) isActived.value = false;
  });
});
let isActived = ref(false);
const showItem = (e) => {
  //   console.log(e);
};
const options = [
  {
    value: "一级1",
    children: [
      {
        value: "二级1",
      },
      {
        value: "二级2",
        children: [
          {
            value: "三级1",
          },
          {
            value: "三级2",
          },
        ],
      },
    ],
  },
  {
    value: "一级2",
  },
  {
    value: "一级3",
  },
];
</script>

<style lang="scss" scoped>
.cascader {
  align-items: center;
  transition: 1s;
  width: 120px;
  height: 25px;
  border-radius: 4px;
  border: 1px solid;
  border-color: v-bind("isActived?'#409EFF':'#f1f3f4'");
  cursor: pointer;
  &_input {
    display: flex;
    justify-content: space-between;
    &_text {
      padding-left: 10px;
    }
    & > img {
      padding-right: 10px;
      transition-property: all;
      width: 15px;
      height: 25px;
    }
  }
}
</style>
