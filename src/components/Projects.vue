<template>
  <section id="projects" class="section-container py-32">
    <div class="text-center mb-24 animate-slide-up">
      <h2
        class="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6"
      >
        Featured
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500"
          >Projects</span
        >
      </h2>
      <p
        class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
      >
        Hand-crafted projects showcasing my expertise in modern web development
        and design
      </p>
    </div>

    <!-- Featured Grid -->
    <div class="grid md:grid-cols-2 gap-8 mb-20">
      <ProjectCard
        v-for="(project, index) in featuredProjects"
        :key="project.id"
        :project="project"
        :index="index"
        class="group-hover-scale animate-slide-up hover:scale-[1.02] transition-all duration-500"
      />
    </div>

    <!-- All Projects CTA -->
    <div class="text-center">
      <a
        href="/projects"
        class="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold text-lg rounded-3xl hover:bg-white/20 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10"
      >
        View All Projects
        <svg
          class="w-5 h-5 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { projects } from "@/data";
import ProjectCard from "./ProjectCard.vue";

const featuredProjects = computed(() => projects.filter((p) => p.featured));
</script>
