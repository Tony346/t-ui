<template>
    <div class="options">
        <div @click="changeShow">{{sourceOption.value}}</div>
        <div v-show="isShowOptions">
        <Options v-for="item in sourceOption.children" :key="item.value" :sourceOption="item"></Options>
        </div>
    </div>
</template>

<script setup>
import { defineProps,ref } from "vue";
const props = defineProps({
  sourceOption: {
    type: Object,
  },
});

let isShowOptions=ref(false)
const changeShow=()=>{
      isShowOptions.value=true
}
</script>

<style lang="scss" scoped>
.options{
    display: flex;
    // display: none;
    white-space: nowrap;
}
</style>
