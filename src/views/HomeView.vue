<template>
  <div class="home">
    <h1>{{ AppTilte }}</h1>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="dereaseCounter(2)" class="btn">--</button>
      <button @click="dereaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>
    <div class="editor">
      <h4>Edit</h4>
      <input v-model="counterData.title" type="text" value="" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const AppTilte = "Test";

const increaseCounter = (amount) => {
  counterData.count = counterData.count + amount;
};

const dereaseCounter = (amount) => {
  counterData.count = counterData.count - amount;
};

//Variable
const counterData = reactive({
  count: 0,
  title: "Momojojo",
});
</script>

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

/**/
.editor {
  margin-top: 60px;
}
</style>
