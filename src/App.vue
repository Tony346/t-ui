<template>
  <div class="test">
    <div>test</div>
    <div><span>红包个数</span> <input type="text"  v-model="count"/>个</div>
    <div><span>总   金   额</span> <input type="text" v-model="money"/>元</div>
    <button @click="start">发红包</button>

    <div >

    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
const money=ref(0)
const count=ref(0)
const start=()=>{
  const moneyArr=[]
  let restmoney=money
  while(moneyArr.length<count.value){
         let  averageMoney=restmoney/(count.value-money.length)
        //  let rmoney=Math.random()*
  }
}
</script>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
  border: 1px solid orange;
}
</style>
