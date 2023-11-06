<script setup lang="ts">
import type { Works } from "~/types/works";
const { data } = await useMicroCMSGetList<Works>({
  endpoint: "works",
  queries: { limit: 2 },
});
const { params } = useRoute(); 
const { data: work } = await useMicroCMSGetListDetail<Works>({
  endpoint: "works",
  contentId: params.id,
})
</script>

<template>
  <div class="child">
    <div class="worksMainVisual">
      <div class="container container--lg worksMainVisual__inner">
        <div class="worksMainVisual__contents">
          <h1 class="worksMainVisual__title">{{ work?.title }}</h1>
          <dl class="worksMainVisual__item">
            <dt class="worksMainVisual__itemName">作業時間</dt>
            <dd>{{ work?.term }}</dd>
          </dl>
          <p v-if="work?.overview">
            {{ work?.overview }}
          </p>
        </div>
        <figure class="worksMainVisual__thumbnail">
          <img 
          :src="work?.thumbnail.url"
          :width="work?.thumbnail.width"
          :height="work?.thumbnail.height"
          :alt="work?.title" />
        </figure>
      </div>
    </div>

    <div class="container">
      <dl class="worksItem">
        <dt class="worksItem__title">URL</dt>
        <dd class="worksItem__contents">
          <a :href="work?.url" target="_blank">{{ work?.url }}</a>
        </dd>
      </dl>
      <dl class="worksItem">
        <dt class="worksItem__title">技術</dt>
        <dd class="worksItem__contents">
          <span v-for="skill in work?.skill" :key="skill">
            {{ skill }}
          </span>
        </dd>
      </dl>
      <dl class="worksItem">
        <dt class="worksItem__title">アピールポイント</dt>
        <dd class="worksItem__contents">
          {{ work?.points }}
        </dd>
      </dl>
    </div>

    <div class="btn-area text-center">
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-800 rounded-md group-hover:bg-opacity-0">
          <NuxtLink to="/works" class="buttonPrimary">Back to List</NuxtLink>
        </span>
      </button>
    </div>
  </div>
</template>