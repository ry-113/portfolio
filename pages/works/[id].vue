<script setup lang="ts">
import type { Works } from "~/types/works";
const { params } = useRoute(); 
const id = params.id;
const config = useRuntimeConfig();
const client = {
  serviceDomain: config.public.serviceDomain,
  apiKey: config.public.apiKey
};
const { data: work } = await useFetch(`/works/${id}`, {
  baseURL: `https://${client.serviceDomain}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": client.apiKey,
  },
});
</script>

<template>
  <div class="h-24 md:h-40"></div>
  <div class="text-sm md:text-lg breadcrumbs">
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li> 
        <li>
          <NuxtLink to="/works">Works</NuxtLink>
        </li>
        <li>
          {{ work?.title }}
        </li>
      </ul>
    </div>
  <div class="child">
    <div class="worksMainVisual my-10">
      <div class="worksMainVisual__inner">
        <figure class="worksMainVisual__thumbnail relative">
          <img 
          :src="`${work?.thumbnail.url}?fit=crop&w=800&h=440`"
          :alt="work?.title"
          class="w-full h-full drop-shadow-[0_0_8px_skyblue]" />
        </figure>
      </div>
    </div>
    <div class="description mb-10">
      <h1 class="worksMainVisual__title text-xl md:text-2xl lg:text-2xl mb-1 font-bold">{{ work?.title }}</h1>
      <dl class="worksMainVisual__item flex gap-5">
        <dt class="worksMainVisual__itemName font-bold">作業時間</dt>
        <dd>{{ work?.term }}</dd>
      </dl>
      <dl class="worksItem flex gap-5">
        <dt class="worksItem__title font-bold shrink-0">URL</dt>
        <dd class="worksItem__contents">
          <NuxtLink :href="work?.url" target="_blank">{{ work?.url }}</NuxtLink>
        </dd>
      </dl>
      <dl class="worksItem flex gap-5">
        <dt class="worksItem__title font-bold shrink-0">技術</dt>
        <dd class="worksItem__contents">
          <span v-for="skill in work?.skill" :key="skill">
            {{ skill }} /
          </span>
        </dd>
      </dl>
      <dl class="mt-4">
          <dt class="font-bold">概要</dt>
          <dd>{{ work?.overview }}</dd>
      </dl>
      <dl class="worksItem mt-4">
        <dt class="worksItem__title font-bold">アピールポイント</dt>
        <dd class="worksItem__contents">
          {{ work?.points }}
        </dd>
      </dl>
    </div>

    <div class="btn-area text-center mb-5">
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm md:text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-800 rounded-md group-hover:bg-opacity-0">
          <NuxtLink to="/works" class="buttonPrimary">Back to List</NuxtLink>
        </span>
      </button>
    </div>
  </div>
</template>