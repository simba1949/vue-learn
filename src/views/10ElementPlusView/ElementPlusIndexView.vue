<template>
    <!-- 如果登录了，就显示子路由，否则显示登录注册页面 -->
    <div v-if="login">
        <h1>主页</h1>
        <router-view></router-view>
    </div>
    <div v-else>
        <LoginAndRegisterView></LoginAndRegisterView>
    </div>
</template>

<script setup lang="ts">
// 注册一个钩子，在组件被挂载之前被调用
import { ref } from 'vue'
import LoginAndRegisterView from './LoginAndRegisterView.vue';

// 登录状态，默认为 false
const login = ref(false)

const token = localStorage.getItem("token");
console.log("token", token)
if (null != token && undefined != token && "" != token) {
    login.value = true
}
console.log("login", login.value)
</script>