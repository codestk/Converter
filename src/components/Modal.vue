<template>
  <Teleport to=".modal-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot></slot>

      <!-- <pre>{{ this.$slots.title() }}</pre> -->

      <button @click="handleButtonClick">Hide Modal</button>

      <div>Username is : {{ userData.userName }}</div>
    </div>
  </Teleport>
</template>

<script setup>
import { inject } from "vue";

/*
    prop
 */
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No Data",
  },
});

/**
 * Emit
 */
const emit = defineEmits(["update:modelValue"]);

const handleButtonClick = () => {
  emit("update:modelValue", false);
};

const userData = inject("userData");
</script>

<style>
.modal {
  background-color: rgb(51, 152, 71);
  padding: 12px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
