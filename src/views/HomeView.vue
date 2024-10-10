<!-- ------------------------------------------------------------ 
    Html Template 
 ---------------------------------------------------------------->

<template>
  <div class="home">
    <h1>{{ AppTitle }}</h1>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="deceaseCounter(2)" class="btn">--</button>
      <button @click="deceaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>
    <h1>cvdsvdf</h1>
    <p>This event is {{ OddOrEven }}</p>
    <div class="editor">
      <h4>Edit 1</h4>
      <input v-model="counterData.title" type="text" value="" v-Autofocus />
    </div>
  </div>
</template>

<!-- ------------------------------------------------------------ 
    script 
 ---------------------------------------------------------------->
<script setup>
import {
  computed,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  watch,
} from "vue";

import { vAutofocus } from "@/directives/vAutofocus";

/*
    Variable & Model**********************************
*/
const counterData = reactive({
  count: 0,
  title: "Motosoto",
});
const AppTitle = "Test";

/*
    Function*******************************************
*/
const increaseCounter = (amount) => {
  counterData.count = counterData.count + amount;
};

const deceaseCounter = (amount) => {
  counterData.count = counterData.count - amount;
};

/*
    Data Event****************************************
*/
const OddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return "Even";

  return "Odd";
});

watch(
  () => counterData.count,
  (newCount, oleCount) => {
    if (newCount === 20) alert("Max 20");
  }
);

/*
  Event*****************************************
*/
onBeforeMount(() => {
  console.log("onBeforeMount");
});

onMounted(() => {
  console.log("onMounted");
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});

onUpdated(() => {
  console.log("onUpdated");
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});

onUnmounted(() => {
  console.log("onUnmounted");
});

onActivated(() => {
  console.log("onActivated");
});

onDeactivated(() => {
  console.log("onDeactivated");
});

/*
  directive ****************************************************
*/
</script>

<!--------------------------------------------------------------- 
    style 
 ---------------------------------------------------------------->
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

.editor {
  margin-top: 60px;
}
</style>
