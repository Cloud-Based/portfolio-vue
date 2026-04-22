<template>
  <section id="skills" class="section-container py-32">
    <div class="text-center mb-24 animate-slide-up">
      <h2
        class="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6"
      >
        Skills &
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500"
          >Expertise</span
        >
      </h2>
      <p class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
        Technologies I work with and love to use in my projects
      </p>
    </div>

    <!-- Skills Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <SkillCard
        v-for="skill in skills"
        :key="skill.name"
        :skill="skill"
        class="animate-slide-up hover:scale-105 transition-all duration-500"
        :style="`animation-delay: ${index * 0.1}s`"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { skills } from "@/data";
import SkillCard from "./SkillCard.vue";
import { ref } from "vue";

const index = ref(0);
</script>
