<template>
    <!-- 使用内层组件视图 -->
    <!-- 引入子组件，bing属性绑定到子组件的自定义属性上（例如:age） -->
    <InnerComponentView :age="count" />
    <button @click="incrementValue">点击</button>
</template>

<script setup lang="ts">
// 引入的组件
import { provide, ref } from 'vue';
import InnerComponentView from './InnerComponentView.vue';

const title = ref('将进酒');
// 祖先传递数据
provide('title', title);

const count = ref(0);
function incrementValue() {
    console.log('count', count.value);
    count.value++;
}
</script>