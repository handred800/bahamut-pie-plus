<template>
  <form @submit.prevent="searchUser">
    <input class="bg-slate-200" type="text" v-model="username" />
    <button type="submit">搜尋</button>
  </form>

  <small>筆數:{{ list.length }}</small>
  <ul>
    <li v-for="item in list" :key="item.csn">
      <details class="p-1 cursor-pointer">
        <summary>{{ item.title }}</summary>
        <textarea class="p-1 bg-slate-200" readonly>{{ item }}</textarea>
      </details>
    </li>
  </ul>
</template>
<script setup lang="ts">
let username = ref("");
let list = reactive([]);
async function searchUser() {
  const data = await $fetch("/api/list", {
    query: { username: username.value },
  });
  list = data;
  console.log(list);
}
</script>
<style scoped>
textarea {
  width: 100%;
  height: 250px;
  resize: none;
}
</style>
