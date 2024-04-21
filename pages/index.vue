<template>
  <div class="container mx-auto px-4">
    <form @submit.prevent="searchUser">
      <input class="input input-bordered w-full max-w-xs" type="text" v-model="username" :disabled="isFetching" />
      <button class="btn" type="submit" :disabled="isFetching">
        <span class="loading loading-spinner" v-if="isFetching"></span>
        搜尋
      </button>
    </form>

    <small>筆數:{{ list.length }}</small>
    <div class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
      <div v-for="item in list" :key="item.csn">
        <a :href="`https://home.gamer.com.tw/artwork.php?sn=${item.csn}`" target="_blank"
          class="card card-compact shadow hover:shadow-lg border border-slate-300 duration-300">
          <figure class="aspect-[5/3] bg-slate-200">
            <img class="h-full object-contain" :src="item.coverpic" alt="">
          </figure>
          <div class="card-body">
            <div class="card-title text-base">{{ item.title }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
let username = ref("");
let list = ref([]);
let isFetching = ref(false);
async function searchUser() {
  if (username.value === '') return;
  isFetching.value = true;
  const data = await $fetch("/api/list", {
    query: { username: username.value },
  });
  list.value = data;
  isFetching.value = false;
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
