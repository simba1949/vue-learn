<template>
  <h1>{{ hobby[0] }}</h1><br>
  <h1>{{ address.province }}</h1><br>

  <button @click="changeVal">修改名字</button>
</template>

<script setup lang="ts">
import { toRef } from 'vue'

const hobby = toRef(['羽毛球', '乒乓球']);
const address = toRef({
  province: '广东省',
  city: '深圳市',
  district: '南山区',
  street: '南山区'
});

function changeVal() {
  console.log("变动前打印")
  console.log(hobby);
  console.log(address);
  // 修改整个对象，需要使用 Object.assign() 函数
  const newHobby = ['NEW足球', 'NEW篮球'];
  const newAddress = {
    province: 'NEW上海市',
    city: 'NEW上海市',
    district: 'NEW青浦区',
    street: 'NEW华新镇'
  }
  Object.assign(hobby, newHobby);
  Object.assign(address, newAddress);
  console.log("变动后打印")
  console.log(hobby);
  console.log(address);
}
</script>