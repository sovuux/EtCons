<template>
  <div>
    <DataTable :value="data" responsiveLayout="scroll">
      <Column
          v-for="column in props.selectedColumns"
          :key="column.field"
          :field="column.field"
          :header="column.header"
          :sortable="true"
          :filter="true"
      />
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import type { Columns, Product } from "@/Interfaces/DataInterfaces";

const props = defineProps<{
  data: Product[];
  selectedColumns: Columns[];
}>();
</script>
