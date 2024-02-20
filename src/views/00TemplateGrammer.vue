<template>
    <h1>{{ msg }}</h1>
    <h1 v-html="htmlStr"></h1>
    <h1 v-bind:id="dynamicId"></h1>
    <!-- VUE 内置指令 https://cn.vuejs.org/api/built-in-directives.html -->
</template>
  
<script setup lang="ts">
// 使用 {{}} 语法解析字符串
const msg = 'Hello World';
// 使用 v-html 解析原始html字符串
// v-html 会将 html 字符串中的 html 标签解析为真实 html 标签
const htmlStr = '<span style="color: red;">君不见黄河之水天上来</span>';
// 绑定属性
const dynamicId = '123';
</script>