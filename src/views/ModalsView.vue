<template>
  <div>
    <h1>Modals</h1>
    <button @click="showModal = true">show modals</button>
    <div>
      <label for="">
        show dark modals?
        <input v-model="showDarkModals" type="checkbox" name="" id="" />
      </label>
      {{ userData }}
    </div>
    <component
      v-model="showModal"
      title="Motosoto vir prop"
      :is="showDarkModals ? ModalDark : Modal"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        necessitatibus maxime minus. Excepturi sint dolorum perspiciatis.
        Voluptate temporibus beatae odit vitae, neque natus quisquam nostrum,
        dicta, provident asperiores consequuntur. Alias!
      </p>
      <h3>CDD</h3>
    </component>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";
/*
    Modal
*/
const showDarkModals = ref(false);
const showModal = ref(false);

defineProps({ userData: { type: Object } });
</script>

<style></style>
