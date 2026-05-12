<template>
  <div class="min-h-screen">
    <!-- Navbar -->
    <Navbar />

    <router-view />

    <!-- Footer -->
    <footer
      class="bg-white/5 backdrop-blur-xl border-t border-white/20 py-12 mt-32"
    >
      <div class="section-container">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center"
            >
              <img
                src="/assets/favicon.jpg"
                alt="experience"
                class="w-12 h-12 rounded-xl object-contain"
              />
            </div>
            <div>
              <h3
                class="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
              >
                Syaiful Akromul Qodri
              </h3>
              <p class="text-gray-400">Web Developer</p>
            </div>
          </div>

          <div class="flex gap-6">
            <!-- <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors p-2"
              >Privacy</a
            >
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors p-2"
              >Terms</a
            >
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors p-2"
              >Terms</a
            > -->
          </div>
        </div>

        <div
          class="border-t border-white/10 mt-12 pt-8 text-gray-500 text-sm text-center"
        >
          <p>
            &copy; 2026 Syaiful. Built using Vue 3, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>
