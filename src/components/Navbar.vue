<template>
  <nav
    class="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20"
  >
    <div class="section-container flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3 group">
        <div
          class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300"
        >
          <img
            src="/assets/favicon.jpg"
            alt="experience"
            class="w-12 h-12 rounded-xl object-contain"
          />
        </div>

        <div>
          <h1
            class="text-xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
          >
            Syaiful Akromul Qodri
          </h1>

          <p class="text-sm text-gray-400">Web Developer</p>
        </div>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="relative text-lg font-semibold text-white/90 hover:text-white transition-all duration-300 group"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.name }}

          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"
          ></span>
        </a>
      </div>

      <!-- CTA -->
      <a
        href="mailto:aq.syaiful@gmail.com?subject=Hiring Inquiry&body=Hello, I’m interested in your profile and would like to discuss potential opportunities."
        target="_blank"
        class="hidden md:inline-flex px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1"
      >
        Hire Me
      </a>

      <!-- Burger Button -->
      <button
        class="md:hidden p-2 text-white"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg
          v-if="!mobileMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <!-- CLOSE ICON -->
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div class="flex flex-col px-6 py-5 gap-5">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-white font-medium text-lg"
          @click.prevent="
            scrollTo(link.href);
            mobileMenuOpen = false;
          "
        >
          {{ link.name }}
        </a>

        <a
          href="mailto:aq.syaiful@gmail.com?subject=Hiring Inquiry&body=Hello, I’m interested in your profile and would like to discuss potential opportunities."
          target="_blank"
          class="mt-2 inline-flex justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl"
        >
          Hire Me
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mobileMenuOpen = ref(false);

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const scrollTo = (target: string) => {
  const el = document.querySelector(target);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>
