<template>
    <!-- 使用内层组件视图 -->
    <!-- 引入子组件，bing属性绑定到子组件的自定义属性上（例如:age） -->
    <InnerComponentView ref="sonComponent" :age="count" /><br>
    <button @click="incrementValue">点击</button><br>
    <button @click="callSon">调用子组件方法</button><br>
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

// 调用子组件核心方法
// 引用子组件对象，将类型设置为允许为 null
const sonComponent = ref<null | any>(null)
// 调用子组件方法
function callSon() {
    console.log('我去调用子组件了');
    sonComponent.value.printFun(count.value);
}
</script>