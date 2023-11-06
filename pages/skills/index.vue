<script setup lang="ts">
import type { Skills } from "~/types/skills";
const { data: skills } = await useMicroCMSGetList<Skills>({
  endpoint: "skills",
});
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <div class="card w-96 glass" v-for="skill in skills?.contents" :key="skill.title">
      <figure>
        <img 
          :src="`${skill.logo.url}`"
          :alt="skill.title" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ skill.title }}</h2>
        <p>{{ skill.overview }}</p>
      </div>
    </div>
  </div>
  
</template>