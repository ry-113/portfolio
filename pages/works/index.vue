<script setup lang="ts">
const config = useRuntimeConfig();
const client = {
  serviceDomain: config.public.serviceDomain,
  apiKey: config.public.apiKey
};
import type { Works } from "~/types/works";
const { data: works } = await useFetch<Works>("/works",{
  baseURL: `https://${client.serviceDomain}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": client.apiKey,
  },
});
</script>
<template>
  <div class="child">
    <div class="h-24 md:h-40"></div>
    <div class="text-sm md:text-lg breadcrumbs">
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li> 
        <li>
          Works
        </li> 
      </ul>
    </div>
    <h2 class="headingPrimary mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Works</span></h2>

    <div class="container my-10">
      <ol class="works-list flex flex-wrap justify-center gap-5">
        <li v-for="work in works?.contents" :key="work.id" class="works__item animate-scale-up-center">
          <NuxtLink :to="`/works/${work.id}`" class="works__inner">
            <figure class="works_image  hover:drop-shadow-[0_0_8px_skyblue] duration-300">
              <img
              :src="`${work.thumbnail.url}?fit=crop&w=320&h=200`" 
              :alt="work.title">
            </figure>
            <div class="works__text">
              <p class="works__name text-lg md:text-xl">{{ work.title }}</p>
            </div>
          </NuxtLink>
        </li>
      </ol>
    </div>
  </div>
</template>