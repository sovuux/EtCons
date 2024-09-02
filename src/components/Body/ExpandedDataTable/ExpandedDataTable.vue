<template>
  <span class="task-title">
    Задание 5
  </span>
  <div class="task-body">
    <div class="task-body-table-head">
      <DataInputGroup
          :search-query="searchQuery"
          :columns="columns"
          @clearSearch="clearSearch"
          @performSearch="performSearch"
          @updateSearchQuery="updateSearchQuery"
          @updateSelectedFields="updateSelectedFields"
      />
      <DataSelect
        :columns="columns"
        :model-value="selectedColumns"
        @update:model-value="(value) => selectedColumns = value"
      />
    </div>
    <div class="task-body-table-body">
      <DataTable
        :data="filteredProducts"
        :selectedColumns="selectedColumns"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DataInputGroup from "@/components/Body/ExpandedDataTable/DataInputGroup/DataInputGroup.vue";
import DataSelect from "@/components/Body/ExpandedDataTable/DataSelect/DataSelect.vue";
import DataTable from "@/components/Body/ExpandedDataTable/DataTable/DataTable.vue";
import type { Columns } from "@/Interfaces/DataInterfaces";
import { data } from "@/Data/Data";
import { ref } from "vue";

const searchQuery = ref<string>('');

const columns = <Columns[]>[
  { field: "code", header: "Код" },
  { field: "name", header: "Название" },
  { field: "image", header: "Картинка" },
  { field: "price", header: "Цена" },
  { field: "category", header: "Категория" },
  { field: "reviews", header: "Рейтинг" },
  { field: "status", header: "Статус" }
]

const selectedColumns = ref<Columns[]>([
  { field: "code", header: "Код" },
  { field: "name", header: "Название" },
  { field: "image", header: "Картинка" },
  { field: "price", header: "Цена" },
  { field: "category", header: "Категория" },
  { field: "reviews", header: "Рейтинг" },
  { field: "status", header: "Статус" }
])

const products = ref(data)

const filteredProducts = ref(products.value)

function performSearch() {
  const query = searchQuery.value.toLowerCase();

  if (query) {
    filteredProducts.value = products.value.filter((product) =>
        selectedColumns.value.some((col) =>
            product[col.field] && product[col.field].toString().toLowerCase().includes(query)
        )
    );
  } else {
    filteredProducts.value = products.value;
  }
}

function updateSelectedFields(fields: Columns[]) {
  selectedColumns.value = fields;
  performSearch();
}

function clearSearch() {
  searchQuery.value = "";
  filteredProducts.value = products.value;
}

function updateSearchQuery(value: string) {
  searchQuery.value = value;
}
</script>

<style scoped lang="scss">
.task {
  &-body {
    margin-left: 13%;
    width: 75%;
    height: 110%;
    display: grid;
    background: whitesmoke;
    border-radius: 10px;
    &-table-head {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding-top: 1rem;
      padding-bottom: 0.5rem;
    }
    &-table-body {
      display: flex;
      justify-content: center;
    }
  }
}
</style>