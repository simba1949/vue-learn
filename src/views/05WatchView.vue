<template>
    <div>{{ username }}</div>
    <div>
        <button @click="username = '李少白'">Change Name</button>
    </div>

    <div>{{ age }}</div>
    <div>
        <button @click="++age">Change Age</button>
    </div>

    <div>{{ school.schoolName }}</div>
    <div>{{ school.schoolAge }}</div>
    <div>
        <button @click="school.schoolName = '北京大学'; school.schoolAge = 100">Change School</button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const username = ref('anthony')
const age = ref(0)

const school = reactive({
    schoolName: '清华大学',
    schoolAge: 0
})

// 一个侦听器，侦听一个值
// watch(username, (newValue, oldValue) => {
//     // 在嵌套的属性变更时触发
//     // 注意：`newValue` 此处和 `oldValue` 是同一个对象！
//     console.log("newValue = " + newValue);
//     console.log("oldValue = " + oldValue);
// })

// 一个侦听器，侦听多个值
// watch([username, age], (newValue, oldValue) => {
//     console.log("newValue = " + newValue);
//     console.log("oldValue = " + oldValue);
// })

// watch(
//     school,
//     (newValue, oldValue) => {
//         // 监听侦听整个 reactive 响应式数据变化，只能侦听到最新结果，上一次数据侦听不到
//         console.log("newValue = " + JSON.stringify(newValue));
//         console.log("oldValue = " + JSON.stringify(oldValue));
//     }
// )

watch(
    () => [school.schoolName, school.schoolAge],
    (newValue, oldValue) => {
        // 监听侦听多个值变化，可以侦听到上一次数据
        console.log("newValue = " + JSON.stringify(newValue));
        console.log("oldValue = " + JSON.stringify(oldValue));
    }
)
</script>