<template>
    <h1>将进酒</h1>
    <h1>
        {{ componentCount }}
    </h1>
    <button @click="increment">+1</button>

    <h1>子组件</h1>
    <InnerVuexView />
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useCounterStore } from '@/stores/counter.ts'
import InnerVuexView from '@/views/08PiniaView/InnerPiniaView.vue'

const store = useCounterStore();
// 打印 store
console.log("store obj is " + JSON.stringify(store))

// 转换成响应式
const { count: componentCount } = toRefs(store)
console.log("store.count is " + JSON.stringify(store.count))

function increment() {
    // 调用方法
    store.increment()
    // 打印 store
    console.log("store obj is " + JSON.stringify(store))
}
</script>