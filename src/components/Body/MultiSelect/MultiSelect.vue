<template>
  <span class="task-title">Задание 3</span>
  <div class="multiselect-container">
    <MultiSelect
        v-model="selectedCities"
        display="chip"
        :options="cities"
        option-label="name"
        placeholder="Выберите города"
        :max-selected-labels="cities.length"
    />
    <Button
      v-if="selectedCities.length > 0"
      title="Сбросить выбор"
      @click="clearSelection"
    >
      <i class="pi pi-times"/>
    </Button>
  </div>
</template>

<script setup lang="ts">
import MultiSelect from "primevue/multiselect";
import Button from "primevue/button";
import { ref } from "vue"

const selectedCities = ref([])

const cities = ref([
  {  name: 'Москва', id: 'MS' },
  {  name: 'Санкт-Петербург', id: 'SPB' },
  {  name: 'Краснодар', id: 'KR' },
  {  name: 'Новосибирск', id: 'NV' },
  {  name: 'Ростов-на-Дону', id: 'ROD' },
])

function clearSelection(): void {
  selectedCities.value = [];
}
</script>
