<template>
  <nav
    class="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20"
  >
    <div class="section-container flex items-center justify-between h-20">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div
          class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300"
        >
          <span class="text-2xl font-black text-white">S</span>
        </div>
        <div>
          <h1
            class="text-xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
          >
            Syaiful Akromul Qodri
          </h1>
          <p class="text-sm text-gray-400">Web Developer</p>
        </div>
      </NuxtLink>

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

      <!-- CTA Button -->
      <a
        href="/resume.pdf"
        download
        class="hidden md:inline-flex px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1"
      >
        Get Resume
      </a>

      <!-- Mobile Menu Button -->
      <button class="md:hidden p-2">
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
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
