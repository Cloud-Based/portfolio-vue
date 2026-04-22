<template>
  <div
    class="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-700 overflow-hidden h-full shadow-xl hover:shadow-2xl hover:shadow-emerald-600/25"
  >
    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"
    ></div>

    <!-- Image Container -->
    <div class="relative mb-8 overflow-hidden rounded-2xl">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 space-y-6">
      <!-- Title -->
      <h3
        class="text-2xl lg:text-3xl font-bold text-white group-hover:text-emerald-500 transition-all duration-500 line-clamp-2"
      >
        {{ project.title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-300 leading-relaxed text-lg line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies.slice(0, 4)"
          :key="tech"
          class="px-4 py-2 bg-white/10 backdrop-blur-sm text-sm font-medium rounded-xl text-white border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap gap-4 pt-6 border-t border-white/20">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-emerald-500/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex-1 min-w-[120px] justify-center"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
          Live Demo
        </a>

        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 hover:border-white/50 hover:shadow-lg transition-all duration-300 flex-1 min-w-[100px] justify-center"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-4m0 0l4 4m-4-4v4m-4-4H5a2 2 0 00-2 2v3a2 2 0 002 2h5.5"
            ></path>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/types";

interface Props {
  project: Project;
  index: number;
}

defineProps<Props>();
</script>
