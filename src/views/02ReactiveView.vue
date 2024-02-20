<template>
  <h1>{{ hobby[0] }}</h1><br>
  <h1>{{ address.province }}</h1><br>

  <button @click="changeVal">修改名字</button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const hobby = reactive(['羽毛球', '乒乓球']);
const address = reactive({
  province: '广东省',
  city: '深圳市',
  district: '南山区',
  street: '南山区'
});

function changeVal() {
  // 改动其中某个值，直接赋值给对应属性或者角标即可，如下：
  hobby[0] = '篮球';
  address.province = '上海市';
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
}
</script>