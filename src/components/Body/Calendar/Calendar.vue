<template>
  <span class="task-title">Задание 2</span>
  <div class="calendar-container">
    <span>Значение переменной дерективы v-model {{ formattedTime }}</span>
    <DatePicker
        v-model="time"
        time-only
        show-icon
        show-button-bar
        hour-format="24"
        @update:model-value="formatTime"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import DatePicker from "primevue/datepicker"

const time = ref<Date | null>(null);

const formattedTime = ref("");

const formatTime = (newTime: Date | null) => {
  time.value = newTime;
  if (newTime) {
    const hours = newTime.getHours().toString().padStart(2, "0");
    const minutes = newTime.getMinutes().toString().padStart(2, "0");
    formattedTime.value = ` - ${hours}:${minutes}`;
  } else {
    formattedTime.value = "";
  }
}
onMounted(() => {
  const now = new Date();
  time.value = now;
  formatTime(now);
})
</script>

<style scoped>
.calendar-container {
  display: grid;
  justify-items: center;
}
</style>