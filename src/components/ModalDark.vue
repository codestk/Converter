<template>
  <Teleport to=".modal-container">
    <div v-if="modelValue" class="modal-dark">
      <h1>{{ title }}</h1>
      <slot></slot>

      <!-- <pre>{{ this.$slots.title() }}</pre> -->

      <button @click="handleButtonClick">Hide Modal</button>
    </div>
  </Teleport>
</template>

<script setup>
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
</script>

<style>
.modal-dark {
  background-color: chocolate;
  color: white;
  padding: 12px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
