<template>
<div>
  <!-- <t-button :tDisabled="state" >
    按钮
  </t-button> -->
  <t-cascader></t-cascader>
  <!-- <button @click="handle">test</button> -->
</div>

</template>
<script setup>
import {ref} from 'vue'
        let state=ref(true)
        const handle=()=>{
            state.value=!state.value
            console.log(state.value);
        }
</script>

<style lang="scss">

</style>
