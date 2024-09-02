<template>
  <div class="input-group">
    <InputGroup class="input-group-container">
      <Button
          @click="toggleFilterMenu"
          icon="pi pi-filter"
      >
      </Button>
      <InputText
          v-model="searchQueryLocal"
          class="input-group-input-text"
          placeholder="Поиск..."
          @input="onInput"
          @keyup.enter="performSearch"
      />
      <Button
          @click="performSearch"
          class="input-group-button"
          icon="pi pi-search"
      >
        Поиск
      </Button>
    </InputGroup>
    <Button
        @click="clearSearch"
        class="input-group-button input-group-button-clear"
        severity="danger"
    >
      <i class="pi pi-times" />
    </Button>
    <div v-if="showFilterMenu" class="filter-menu">
      <MultiSelect
          v-model="selectedFilterFields"
          :options="columns"
          option-label="header"
          placeholder="Выберите поля для поиска"
          :max-selected-labels="0"
          :show-toggle-all="false"
      />
      <Button
          @click="applyFilters"
          class="input-group-button-filters"
          label="Применить"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputGroup from "primevue/inputgroup";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import MultiSelect from "primevue/multiselect";
import { ref, watch } from "vue";
import type { PropType } from "vue";
import type { Columns } from "@/Interfaces/DataInterfaces";

const emit = defineEmits(['clearSearch', 'performSearch', 'updateSearchQuery', 'customizeSearch', 'updateSelectedFields']);

const props = defineProps({
  searchQuery: {
    type: String as PropType<string>,
    required: true,
    default: ""
  },
  columns: {
    type: Array as PropType<Columns[]>,
    required: true,
    default: () => []
  }
});

const searchQueryLocal = ref(props.searchQuery);
const showFilterMenu = ref(false);
const selectedFilterFields = ref<Columns[]>(props.columns.slice());

function toggleFilterMenu() {
  showFilterMenu.value = !showFilterMenu.value;
}

function onInput() {
  emit('updateSearchQuery', searchQueryLocal.value);
}

function performSearch() {
  emit('performSearch');
}

function applyFilters() {
  emit('updateSelectedFields', selectedFilterFields.value);
  showFilterMenu.value = false;
}

function clearSearch() {
  emit('clearSearch');
}

watch(() => props.searchQuery, (newValue) => {
  searchQueryLocal.value = newValue;
});
</script>


<style scoped lang="scss">
.input-group {
  width: 50%;
  display: flex;
  position: relative;

  &-container {
    max-width: 90%;
  }

  &-input-text {
    outline: gray;
  }

  &-button {
    width: 10%;
    margin-left: 0.5rem;

    &-filters {
      width: 35%;
      margin-left: 0.5rem;
    }

    &-clear {
      width: 5% !important;
    }
  }

  .filter-menu {
    position: absolute;
    top: 3rem;
    left: 0;
    z-index: 1000;
    background: white;
    border: 1px solid #ccc;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>
