<script setup lang="ts">
import type { Skills } from "~/types/skills";
const { data: skills } = await useMicroCMSGetList<Skills>({
  endpoint: "skills",
});
</script>

<template>
  <div class="h-44"></div>
  <section id="skills" class="mb-32">
    <h2 class="headingPrimary mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Skills</span></h2>
    <div class="flex justify-center flex-wrap gap-5 mt-10">
      <div class="card md:w-[240px] w-[300px] glass" v-for="skill in skills?.contents" :key="skill.title">
        <figure class="h-44 drop-shadow-[0_0_8px_skyblue]">
          <img 
            :src="`${skill.logo.url}?fit=fillmax&fill-color=ffffff&w=600&h=600`"
            :alt="skill.title"
            class="w-full h-auto" />
        </figure>
        <div class="card-body h-56">
          <h2 class="card-title">{{ skill.title }}</h2>
          <p>{{ skill.overview }}</p>
        </div>
      </div>
  </div>
  </section>
</template>