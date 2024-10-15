<!-- ------------------------------------------------------------ 
    Html Template 
 ---------------------------------------------------------------->

<template>
  <div class="home">
    <h1 ref="appTitleRef">{{ AppTitle }}</h1>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="deceaseCounter(2)" class="btn">--</button>
      <button @click="deceaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>
    <h1>Test</h1>
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
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onUnmounted,
  onUpdated,
  ref,
  onMounted,
} from "vue";

//import { useCounter } from "@/Use/useCounter";
import { useCounterStore } from "@/stores/userCounterStore";
import { vAutofocus } from "@/directives/vAutofocus";

/*
    Variable & Model**********************************
*/
// const counterData = reactive({
//   count: 0,
//   title: "Motosoto",
// });

const AppTitle = "Test";
const appTitleRef = ref(null);

onMounted(() => {
  console.log(appTitleRef.value);
  appTitleRef.value = "5555";
});

const counter = useCounterStore();
// const { counterData, increaseCounter, deceaseCounter, OddOrEven } =
//   useCounter();

/*
    Function*******************************************
*/
// const increaseCounter = async (amount) => {
//   counterData.count += amount;

//   await nextTick(() => {
//     console.log("Next tick  0001");
//   });
// };

// const deceaseCounter = (amount) => {
//   counterData.count = counterData.count - amount;
// };

// /*
//     Data Event****************************************
// */
// const OddOrEven = computed(() => {
//   if (counterData.count % 2 === 0) return "Even";

//   return "Odd";
// });

// watch(
//   () => counterData.count,
//   (newCount, oleCount) => {
//     if (newCount === 20) alert("Max 20");
//   }
// );

// onMounted(() => {
//   console.log(appTitleRef.value);
//   appTitleRef.value = "5555";
// });

/*
  Event*****************************************
*/
onBeforeMount(() => {
  console.log("onBeforeMount");
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
