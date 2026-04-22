<template>
  <Navbar />
  <Hero />
  <div class="text-red-500 text-3xl font-bold">Tailwind Test</div>
  <About />
  <Projects />
  <Contact />
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
</script>
