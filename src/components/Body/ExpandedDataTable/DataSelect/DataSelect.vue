<template>
  <div class="data-select">
    <MultiSelect
        v-model="selectedColumnsLocal"
        :options="columns"
        option-label="header"
        placeholder="Столбцы"
        :max-selected-labels="0"
        :show-toggle-all="false"
    />
  </div>
</template>

<script setup lang="ts">
import MultiSelect from "primevue/multiselect";
import type { Columns } from "@/Interfaces/DataInterfaces";
import { ref, watch } from "vue";

const props = defineProps<{
  columns: Columns[];
  modelValue: Columns[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: Columns[]) : void;
}>();

const selectedColumnsLocal = ref<Columns[]>(
    props.modelValue && props.modelValue.length > 0
        ? props.modelValue
        : props.columns.slice(0)
);

watch(selectedColumnsLocal, (newValue) => {
  emit("update:modelValue", newValue);
})

watch(() => props.modelValue, (newValue) => {
  selectedColumnsLocal.value = newValue;
})
</script>

<style lang="scss" scoped>
.data-select {
  margin-left: 1%;
}
</style>