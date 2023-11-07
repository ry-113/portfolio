<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
import type { Works } from "~/types/works";
const { data } = await useMicroCMSGetList<Works>({
  endpoint: "works",
});

import { Carousel, Pagination, Slide } from 'vue3-carousel';
  
import 'vue3-carousel/dist/carousel.css';
</script>
<template>
  <div>
    <div class="pt-[100vh]"></div>
    <section id="about" class="sectionPrimary py-12">
      <div class="container">
        <h2 class="headingPrimary mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">About</span></h2>
        <div class="profile pt-12">
          <div class="profile__upper flex justify-between">
            <div class="profile__text">
              <p class="profile__name text-xl md:text-2xl lg:text-2xl">
                山元 稜<span lang="en" class="pl-7">Ryo Yamamoto</span>
              </p>
              <dl class="profile__item">
                <dt class="profile__title pt-5 pb-1">技術スタック</dt>
                <dd>HTML / CSS / JavaScript / TypeScript / Vue3 / Nuxt3 </dd>
              </dl>

              <dl class="profile__item">
                <dt class="profile__title pt-5 pb-1">趣味</dt>
                <dd>ゲーム、温泉・サウナ、筋トレ、建築、コーヒー、自然</dd>
              </dl>
            </div>

            <figure class="profile__image">
              <img class="rounded-full" src="https://placehold.jp/260x260.png" alt="">
            </figure>
          </div><!-- profile__upperここまで -->

          <p class="profile__message py-5">
            閲覧いただきありがとうございます。フロントエンドエンジニアを目指して学習中です。
            <br>主にNuxtを使っています。今後はReactの学習やバックエンドの基礎知識、基本情報技術者試験の取得に取り組んでいきます。
          </p>
        </div><!-- profileここまで -->
      </div><!-- containerここまで -->
      
      <div class="btn-area text-center">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-800 rounded-md group-hover:bg-opacity-0">
              <NuxtLink to="/skills" class="buttonPrimary">My Skills >></NuxtLink>
            </span>
          </button>
        </div>

    </section><!-- aboutセクションここまで -->

    <section id="works" class="sectionPrimary background--gray py-12">
      <div class="container">
        <h2 class="headingPrimary mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Works</span></h2>

        <ClientOnly>
          <Carousel :autoplay="3000" :wrap-around="true" :transition="1000" class="py-5">
            <Slide v-for="work in data?.contents" :key="work.id">
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
            </Slide>
        
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </ClientOnly>
        <div class="btn-area text-center">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-800 rounded-md group-hover:bg-opacity-0">
              <NuxtLink to="/works" class="buttonPrimary">View More >></NuxtLink>
            </span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>