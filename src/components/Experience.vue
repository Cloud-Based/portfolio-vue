<template>
  <section id="experience" class="section-container py-32">
    <div class="text-center mb-24 animate-slide-up">
      <h2
        class="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6"
      >
        Work
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"
          >Experience</span
        >
      </h2>
      <p class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
        Professional journey and achievements in software development
      </p>
    </div>

    <!-- Timeline -->
    <div class="max-w-4xl mx-auto space-y-8">
      <ExperienceCard
        v-for="exp in experiences"
        :key="exp.id"
        :experience="exp"
        :class="[
          'animate-slide-up',
          exp.id % 2 === 0 ? 'lg:ml-32' : 'lg:mr-32',
        ]"
        :style="`animation-delay: ${exp.id * 0.1}s`"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from "@/data";
import ExperienceCard from "./ExperienceCard.vue";
</script>
