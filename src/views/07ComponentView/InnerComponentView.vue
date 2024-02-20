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
</script>