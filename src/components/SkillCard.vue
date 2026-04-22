<template>
  <div
    class="group relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-teal-600/25 h-full"
  >
    <!-- Icon -->
    <div
      class="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500"
    >
      <i
        :class="['bx ', skill.icon, 'text-6xl']"
        :style="{ color: skill.color }"
      ></i>

    </div>

    <!-- Content -->
    <div class="space-y-4">
      <h3
        class="text-2xl font-bold text-white group-hover:text-teal-500 transition-colors duration-500"
      >
        {{ skill.name }}
        <i class="bx bxl-laravel text-4xl"></i>
        <i class="bxl bx-laravel text-4xl"></i>
      </h3>

      <p class="text-sm text-gray-400 font-medium">
        {{ skill.category }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from "@/types";
interface Props {
  skill: Skill;
}

defineProps<Props>();
</script>
