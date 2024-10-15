<template>
  <div class="post">
    <h1>post</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/postDetail/${post.id}`"
          >{{ post.title }}
        </router-link>
      </li>
    </ul>

    <button
      @click="counter.increaseCounter(1)"
      :class="{ yellow: counter.OddOrEven === 'Odd' }"
      class="counter-btn"
      type="button"
    >
      {{ counter.count }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/userCounterStore";

const posts = ref([
  {
    id: "id1",
    title: "post1",
  },
  {
    id: "id2",
    title: "post2",
  },
  {
    id: "id3",
    title: "post3",
  },
]);

const counter = useCounterStore();
</script>

<style>
.counter-btn {
  padding: 7px;
  font-size: 22px;
  width: 100%;
  background-color: brown;
}

.yellow {
  background-color: yellow;
}
</style>
