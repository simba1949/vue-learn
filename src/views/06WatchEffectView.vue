<template>
    <div>{{ username }}</div>
    <div>
        <button @click="username = '李少白'">Change Name</button>
    </div>

    <div>username 长度为：{{ length }}</div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const username = ref('anthony')
const length = ref(0)

watchEffect(() => {
    // 进入页面的话，会执行一次
    console.log('watchEffect')
    length.value = username.value.length
})
</script>