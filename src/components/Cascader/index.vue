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
      <div v-show="isActived" class="cascader_options">
       <div class="cascader_options_item">
         <Options v-for="option in options" :key="option.value" :sourceOption="option"></Options>
       </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Options from './Options.vue'
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
const chooseItem=()=>{

}
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
    children:[
      {
        value:'二级3'
      },
      {
        value:'二级4'
      }
    ]
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
      padding-left: 10px;
      transition-property: all;
      width: 15px;
      height: 25px;
      transform: rotate(v-bind("isActived? '180deg':'0deg'"));
    }
  }
  &_options {
    // width: 60px;
    box-shadow: 10px 10px 5px rgb(215, 213, 213);
    // display: flex;
    &_item{
      // border-right:1px solid salmon ;
    }
  }
}
</style>
