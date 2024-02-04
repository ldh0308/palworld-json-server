<template>
    <form class="d-flex" role="search">  
    <input class="form-control me-2" v-model="searchQuery" placeholder="타이틀을 입력하세요" @input="search"/>
    </form><br>
    <ul class="list-group">
      <li class="list-group-item" v-for="post in filteredPosts" :key="post.id">
      Id: {{ post.id }} - Title: {{ post.title }} - Views: {{ post.views }}</li>
    </ul>
</template>


<script setup>
import NavBarName from './components/NavBar.vue'
import { ref, onMounted, watch } from 'vue';
// import axios from 'axios';

const searchQuery = ref(''); //양방향 검색 담을 그릇
const posts = ref([]); // json 값 담을 그릇
const filteredPosts = ref([]); // 출력 값 담을 그릇

async function fetchData() {
    posts.value = null
        const res = await fetch(
                `https://palworld-json-server.fly.dev/posts`
                )
        posts.value = await res.json()
}

// const fetchData = async () => {
//   const response = await axios.get(`https://palworld-json-server.fly.dev/posts`);
//   posts.value = response.data;
// };

const filterPosts = () => {
  if (searchQuery.value) {
    filteredPosts.value = posts.value.filter(post => post.title.includes(searchQuery.value));
  } else {
    filteredPosts.value = posts.value;
  }
};

onMounted(() => {
  fetchData();
});

watch(searchQuery, filterPosts);
</script>

<style>
#app {
  text-align: center;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
