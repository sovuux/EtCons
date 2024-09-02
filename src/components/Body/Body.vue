<template>
  <div class="app-body">
    <h1>Тестовые задания</h1>
    <div class="container">
      <EditableLink />
    </div>
    <div class="container">
      <Calendar />
    </div>
    <div class="container">
      <MultiSelect />
    </div>
    <div class="container">
      <DataTable />
    </div>
    <div class="container">
      <ExpandedDataTable />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditableLink from "@/components/Body/Editablelink/EditableLink.vue";
import Calendar from "@/components/Body/Calendar/Calendar.vue";
import MultiSelect from "@/components/Body/MultiSelect/MultiSelect.vue";
import DataTable from "@/components/Body/DataTable/DataTable.vue";
import ExpandedDataTable from "@/components/Body/ExpandedDataTable/ExpandedDataTable.vue";
</script>

<style scoped>
h1 {
  user-select: none;
}
.app-body {
  display: grid;
  justify-items: center;
  width: 100%;
}
.container {
  width: 100%;
  display: grid;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 6rem;
}
</style>