<template>
  <div
    class="flex flex-wrap justify-center gap-4 pt-12 border-t border-white/20"
  >
    <span
      v-for="(item, index) in items"
      :key="index"
      class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-medium text-white border border-white/20"
    >
      {{ item }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>
