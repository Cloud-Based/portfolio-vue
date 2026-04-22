<template>
  <section id="contact" class="section-container py-32">
    <div class="max-w-4xl mx-auto text-center animate-slide-up">
      <h2
        class="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6"
      >
        Let's
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500"
          >Work</span
        >
        Together
      </h2>
      <p
        class="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed"
      >
        Ready to bring your next project to life? Let's discuss your ideas and
        create something amazing together!
      </p>

      <!-- Contact Form -->
      <form
        class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16"
        action="https://formspree.io/f/mpqkjogg"
        method="POST"
      >
        <div>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            class="w-full px-6 py-5 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none transition-all duration-300 text-lg"
            required
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            class="w-full px-6 py-5 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none transition-all duration-300 text-lg"
            required
          />
        </div>
        <div class="md:col-span-2">
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            class="w-full px-6 py-5 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 resize-vertical focus:border-teal-500 focus:outline-none transition-all duration-300 text-lg"
            required
          ></textarea>
        </div>
        <div class="md:col-span-2">
          <button
            type="submit"
            class="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-500 group"
          >
            <span class="flex items-center justify-center gap-3">
              Send Message
              <svg
                class="w-6 h-6 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </form>

      <!-- Social Links -->
      <div class="pt-16 border-t border-white/20">
        <p class="text-xl text-gray-400 mb-8">Or connect with me directly:</p>
        <div class="flex flex-wrap justify-center gap-6">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center hover:bg-teal-500/20 hover:border-emerald-400 hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-emerald-500/25"
          >
            <img
              :src="social.icon"
              :alt="social.name"
              class="w-7 h-7 opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { socialLinks } from "@/data";
</script>
