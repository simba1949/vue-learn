<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
    <div>
        {{ age }}
    </div>

    <div>
        {{ msg }}
    </div>

    <button @click="() => { msg = '君不见黄河之水天上来' }">change</button>

    <div>
        父组件调用子组件方法的传参：{{ fromParentVal }}
    </div>
</template>

<script setup lang="ts">
const msg = '君不见黄河之水天上来';

import { inject } from 'vue';
const title = inject('title');

defineProps({
    age: {
        type: Number,
        default: 18
    }
})

// 定义变量
let fromParentVal: any;
// 定义方法
function printFun(val: any) {
    console.log('我被父组件调用了');
    console.log(val)
    fromParentVal = val;
}
// 暴露方法给父组件调用
defineExpose({
    printFun
});
</script>