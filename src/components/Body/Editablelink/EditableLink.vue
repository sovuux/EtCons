<template>
  <span class="task-title">Задание 1(закончить)</span>
  <div class="link-container">
    <div>
      <InputText
          v-model="url"
          variant="filled"
          placeholder="https://"
          @blur="fetchPageTitle"
          @keyup.enter="fetchPageTitle"
          class="link-container-item"
      />
    </div>
    <div v-if="isEditing === false" class="flex align-items-center ">
      <a
          :href="url"
          target="_blank"
      >
        {{ pageTitle }}
      </a>
      <Button
          @click="isEditing = true"
          style="cursor: pointer;"
          class="link-container-item"
      >
        <i class="pi pi-pencil" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button"

const isEditing = ref(true)
const url = ref("");
const pageTitle = ref("");


async function fetchPageTitle() {
  isEditing.value = false;
}
</script>

<style lang="scss" scoped>
.link {
  &-container {
    display: flex;
    width: 100%;
    justify-content: center;
  }
}
.pi, .pi-pencil {
  padding: 0.15rem;
}
</style>