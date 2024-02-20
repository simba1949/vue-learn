<template>
    <h1>{{ name }}</h1><br>
    <h1>{{ age }}</h1><br>
    <h1>{{ hobby[0] }}</h1><br>
    <h1>{{ address.province }}</h1><br>

    <button @click="changeVal">修改名字</button>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'

const name = ref('anthony');
const age = ref('18');
const hobby = ref(['羽毛球', '乒乓球']);
const address = ref({
    province: '广东省',
    city: '深圳市',
    district: '南山区',
    street: '南山区'
});

function changeVal() {
    // 修改值时需要使用 .value 对值进行修改
    name.value = 'anthony2';
    age.value = '19';
    hobby.value = ['足球', '篮球'];
    address.value = {
        province: '上海市',
        city: '上海市',
        district: '青浦区',
        street: '华新镇'
    }
}
</script>