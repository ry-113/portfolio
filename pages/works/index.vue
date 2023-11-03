<script setup lang="ts">
import type { Works } from "~/types/works";
const { data: works } = await useMicroCMSGetList<Works>({
  endpoint: "works",
});
</script>
<template>
  <div class="child">
    <div class="childMainVisual">
      <div class="container container--lg">
        <h1 class="childMainVisual__title">Works</h1>
        <p>成果物をご紹介します。</p>
      </div>
    </div>

    <div class="container">
      <ol class="row works">
        <li v-for="work in works?.contents" :key="work.id" class="works__item">
          <NuxtLink :to="`/works/${work.id}`" class="works__inner">
            <figure class="works_image">
              <img
              :width="work.thumbnail.width"
              :height="work.thumbnail.height"
              :src="work.thumbnail.url" 
              :alt="work.title">
            </figure>
            <div class="works__text">
              <p class="works__name">{{ work.title }}</p>
            </div>
          </NuxtLink>
        </li>
      </ol>
    </div>
  </div>
</template>