<template>
  <div
    class="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-700 shadow-2xl hover:shadow-emerald-500/25"
  >
    <!-- Company Logo -->
    <div class="flex items-center gap-6 mb-8">
      <div
        class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500"
      >
        <img
          v-if="experience.logo"
          :src="experience.logo"
          :alt="experience.company"
          class="w-12 h-12 rounded-xl object-contain"
        />
        <span v-else class="text-2xl font-bold text-white">{{
          experience.company.charAt(0)
        }}</span>
      </div>

      <div class="flex-1 min-w-0">
        <h3
          class="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-1"
        >
          {{ experience.position }}
        </h3>
        <p class="text-xl text-gray-300 font-semibold">
          {{ experience.company }}
        </p>
        <p class="text-sm text-gray-500 mt-1">{{ experience.duration }}</p>
      </div>
    </div>

    <!-- Description -->
    <div class="space-y-4 mb-8">
      <p
        v-for="(desc, index) in experience.description"
        :key="index"
        class="text-gray-300 text-lg flex items-start gap-3"
      >
        <span class="text-emerald-400 font-bold mt-1 min-w-[20px]">•</span>
        {{ desc }}
      </p>
    </div>

    <!-- Technologies -->
    <div class="flex flex-wrap gap-2 pt-6 border-t border-white/20">
      <span
        v-for="tech in experience.technologies"
        :key="tech"
        class="px-4 py-2 bg-emerald-500/20 text-emerald-300 text-sm font-medium rounded-xl border border-emerald-400/30 hover:bg-emerald-500/30 transition-all duration-300"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from "@/types";

interface Props {
  experience: Experience;
}

defineProps<Props>();
</script>
