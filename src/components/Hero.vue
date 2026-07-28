<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import TechStack from "./reusable/TechStack.vue";

const showDropdown = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const handleMouseEnter = () => {
  // Hover hanya untuk desktop
  if (window.innerWidth >= 640) {
    showDropdown.value = true;
  }
};

const handleMouseLeave = () => {
  if (window.innerWidth >= 640) {
    showDropdown.value = false;
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    showDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <section
    id="hero"
    class="section-container min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
  >
    <!-- Background -->
    <div class="absolute inset-0">
      <div
        class="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-2xl animate-bounce"
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
      ></div>
    </div>

    <div class="text-center z-10 max-w-5xl mx-auto animate-fade-in">
      <!-- Badge -->
      <div
        class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 mt-8 border border-white/20"
      >
        <div class="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
        <span class="text-lg font-semibold text-white">
          Open for new opportunities
        </span>
      </div>

      <!-- Heading -->
      <h1
        class="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6"
      >
        Hi, I'm
        <span
          class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
        >
          Syaiful
        </span>
      </h1>

      <p
        class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        Web Developer focused on crafting clean, scalable, and performant web
        experiences with modern tools like
        <span class="font-semibold text-white">Laravel Framework</span>,
        <span class="font-semibold text-white">Vue.js</span>, and
        <span class="font-semibold text-white">TypeScript</span>.
      </p>

      <!-- BUTTON -->
      <div
        class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
      >
        <a
          href="#experience"
          class="px-10 py-5 w-60 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-3xl"
        >
          Explore My Work
        </a>

        <!-- DOWNLOAD CV -->
        <div
          ref="dropdownRef"
          class="relative inline-block w-60 sm:w-auto flex justify-center"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <button
            @click.stop="toggleDropdown"
            class="px-5 py-5 border-2 border-white/30 text-white rounded-3xl w-60 flex items-center justify-center gap-2 hover:bg-white/10 transition"
          >
            Download CV

            <svg
              class="w-4 h-4 transition-transform duration-300"
              :class="{ 'rotate-180': showDropdown }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- DROPDOWN -->
          <Transition
            enter-active-class="transition duration-200"
            enter-from-class="opacity-0 scale-95 -translate-y-2"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-150"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95 -translate-y-2"
          >
            <div
              v-if="showDropdown"
              class="absolute left-0 mt-3 w-full rounded-2xl border border-white/20 bg-black/80 backdrop-blur-xl shadow-2xl overflow-hidden z-50"
            >
              <a
                href="/cv/CV_Syaiful-Akromul-Q_ID.pdf"
                download
                class="flex items-center gap-3 px-5 py-4 text-white hover:bg-white/10 transition"
              >
                🇮🇩 CV Bahasa Indonesia
              </a>

              <a
                href="/cv/CV_Syaiful-Akromul-Q_EN.pdf"
                download
                class="flex items-center gap-3 px-5 py-4 text-white hover:bg-white/10 transition"
              >
                🇺🇸 CV English
              </a>
            </div>
          </Transition>
        </div>
      </div>

      <TechStack
        :items="[
          'Vue.js',
          'TypeScript',
          'Tailwind CSS',
          'Node.js',
          'Laravel Framework',
          'REST API',
          'WordPress',
          'MySQL',
          'Git',
        ]"
      />
    </div>
  </section>
</template>
