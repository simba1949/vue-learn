import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    function increment() {
        console.log('counter.ts val = ' + count.value)
        count.value++
    }

    return {count, doubleCount, increment}
})

// token
export const tokenStore = defineStore('token', () => {
    const token = ref()

    function setToken({data}: { data: any }) {
        token.value = data
    }

    function hasToken() {
        return token.value !== '' && token.value !== null && token.value !== undefined && token.value.length > 0
    }

    return {token, setToken, hasToken}
})