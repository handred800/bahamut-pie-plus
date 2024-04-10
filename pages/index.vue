<template>
    <ul>
        <li v-for="item in list" :key="item.csn">{{ item.title }}</li>
    </ul>
</template>
<script setup lang="ts">
const { data: list } = await useFetch('/api/list', {
    query: { username: 'handred800' }
});
</script>