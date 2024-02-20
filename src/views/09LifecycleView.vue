<template>
    <div>
        <a href="https://cn.vuejs.org/guide/essentials/lifecycle.html" target="_blank">VUE生命周期官方文档</a>
    </div>
    <div>
        <a href="https://cn.vuejs.org/api/composition-api-lifecycle.html" target="_blank">VUE生命周期API</a>
    </div>
    <div>
        <msg>点击次数：{{ count }}</msg><br>
        <button @click="++count">点击</button>
    </div>
    <div>
        <img src="@/assets/VueLifecycle.png"/>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

// 注册一个钩子，在组件被挂载之前被调用
import {onBeforeMount} from 'vue'
// 注册一个回调函数，在组件挂载完成后执行
import {onMounted} from 'vue'
// 注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用
import {onBeforeUpdate} from 'vue'
// 注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用
import {onUpdated} from 'vue'
// 注册一个钩子，在组件实例被卸载之前调用
import {onBeforeUnmount} from 'vue'
// 注册一个回调函数，在组件实例被卸载之后执行
import {onUnmounted} from 'vue'

onBeforeMount(()=>{
    console.log('onBeforeMount')
})
onMounted(()=>{
    console.log('onMounted')
})
onBeforeUpdate(()=>{
    console.log('onBeforeUpdate')
})
onUpdated(()=>{
    console.log('onUpdated')
})
onBeforeUnmount(()=>{
    console.log('onBeforeUnmount')
})
onUnmounted(()=>{
    console.log('onUnmounted')
})

const count = ref(0);
</script>