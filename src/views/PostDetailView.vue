<template>
  <div class="Detail">
    <h1>post Number:{{ $route.params.id }}</h1>

    <div>
      <button @click="ShowPostID" type="button">Show Post ID</button>
      <button @click="goToHomeIn3Second" type="button">
        goToHomeIn3Second
      </button>
      <button @click="gotoFirstPost" type="button">gotoFirstPost</button>
    </div>
  </div>
  <RouterLink to="/post"> << Back</RouterLink>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const rout = useRoute();
const router = useRouter();

const ShowPostID = () => {
  console.log("Hello");
  const test = rout.params.id;
  alert("XXX : " + test);
};

const goToHomeIn3Second = () => {
  setTimeout(() => {
    router.push({ name: "home" });
  }, 3000);
};

const gotoFirstPost = function name(params) {
  router.push({
    name: "postDetail",
    params: {
      id: "id:1",
    },
  });
};
</script>
