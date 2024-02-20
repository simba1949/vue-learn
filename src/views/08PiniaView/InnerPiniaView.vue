<template>
    <h1>将进酒</h1>
    <h1>
        {{ componentCount }}
    </h1>
    <button @click="increment">+1</button>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useCounterStore } from '@/stores/counter.ts'

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