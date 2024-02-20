<template>
    <div>{{ publishedBooksMessage }}</div>
    <div>{{ fullName }}</div>
    <div>
        <button @click="fullName = 'anthony T'">Change Name</button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})


const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
    // getter
    get() {
        return firstName.value + ' ' + lastName.value
    },
    // setter
    set(newValue) {
        console.log("newValue = " + newValue);
        // 注意：我们这里使用的是解构赋值语法
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})
</script>