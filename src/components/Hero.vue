<template>
  <section id="hero"
    class="section-container min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
  >
    <!-- Background Particles -->
    <div class="absolute inset-0">
      <div
        class="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-2xl animate-bounce"
        style="animation-delay: 0s"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-24 h-24 bg-teal-500/20 rounded-full animate-bounce"
        style="animation-delay: 1s"
      ></div>
      <div
        class="absolute top-1/2 left-5 w-16 h-16 bg-teal-500/20 rounded-xl animate-bounce"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute bottom-32 left-1/4 w-12 h-12 bg-emerald-500/20 rounded-lg animate-pulse"
        style="animation-delay: 0.5s"
      ></div>
    </div>

    <div class="text-center z-10 max-w-5xl mx-auto animate-fade-in">
      <!-- Availability Badge -->
      <div
        class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        <div class="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
        <span class="text-lg font-semibold text-white"
          >Open for new opportunities</span
        >
      </div>

      <!-- Main Heading -->
      <h1
        class="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6 leading-tight"
      >
        Hi, I'm
        <span
          class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent drop-shadow-2xl"
          >Syaiful</span
        >
      </h1>

      <!-- Subtitle -->
      <p
        class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        Web Developer focused on crafting clean, scalable, and performant
        web experiences with modern tools like
        <span class="font-semibold text-white">Laravel Framework</span>,
        <span class="font-semibold text-white">Vue.JS</span>, and
        <span class="font-semibold text-white">TypeScript</span>.
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
      >
        <NuxtLink
          to="#projects"
          class="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-3xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden w-full sm:w-auto"
        >
          <span class="relative z-10 flex items-center justify-center gap-3">
            Explore My Work
            <svg
              class="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
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
          </span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"
          ></div>
        </NuxtLink>

        <a
          href="/resume.pdf"
          download
          class="px-10 py-5 border-2 border-white/30 text-white font-semibold text-lg rounded-3xl backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          Download CV
        </a>
      </div>

      <!-- Tech Stack Preview -->
      <TechStack :items="['Vue.JS', 'TypeScript Programming', 'Tailwind CSS', 'Node.js', 'Laravel Framework', 'REST APIs', 'Wordpress CMS', 'MySQL', 'Git Version Control System']" />
    </div>
  </section>
</template>

<script setup lang="ts">
import TechStack from './reusable/TechStack.vue';

// Import data jika diperlukan
</script>
