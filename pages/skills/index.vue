<script setup lang="ts">
import type { Skills } from "~/types/skills";
const { data: skills } = await useMicroCMSGetList<Skills>({
  endpoint: "skills",
});
</script>

<template>
  <ul class="card-group pt-32">
    <li
    v-for="skill in skills?.contents"
    :key="skill.title" 
    class="card">
      <figure class="card__imgframe">
        <img 
        :src="`${skill.logo.url}?fit=fill&fill-color=3331cbf&w=100&h=100`"
        :alt="skill.title" />
      </figure>
      <div class="card__textbox">
        <h1 class="card__title">{{ skill.title }}</h1>
        <p class="card__overview">{{ skill.overview }}</p>
      </div>
    </li>
  </ul>
</template>