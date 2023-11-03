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

    <p class="button-area">
      <NuxtLink to="/works" class="buttonPrimary buttonPrimary--leftArrow">Back</NuxtLink>
    </p>
  </div>
</template>