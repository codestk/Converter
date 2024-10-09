<template>
  <div class="home">
    <button @click="dereaseCounter" class="btn">-</button>
    <span class="counter">{{ counter }}</span>
    <button @click="increaseCounter" class="btn">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const counter = ref(0);

const increaseCounter = () => {
  counter.value++;
};

const dereaseCounter = () => {
  counter.value--;
};
</script>

<!-- <script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++

    }

    const dereaseCounter = () => {
      counter.value--

    }

    return {
      counter, increaseCounter, dereaseCounter

    }

  }

}  

</script>
  <script>
export default
  {
    data() {
      return {
        counter: 0

      }



    }, methods: {

      increaseCounter() {
        this.counter++

      },
      dereaseCounter() {
        this.counter--

      }
    }

  }
</script> -->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
</style>
