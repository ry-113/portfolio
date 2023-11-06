<script setup lang="ts">
import type { Works } from "~/types/works";
const { data } = await useMicroCMSGetList<Works>({
  endpoint: "works",
  queries: { limit: 2 },
});
</script>
<template>
  <div>
    <div class="mainVisual mt-32 absolute inset-0 w-full h-[calc(100vh - 8rem)]">
      <picture>
        <source
        srcset="~/assets/mainvisual.jpg"
        media="(max-width: 767px)"
        class="w-full h-full inset-0 object-cover"
        />
        <img src="~/assets/mainvisual.jpg" alt="" class="w-full h-full object-cover">
      </picture>
    </div>
    <section id="about" class="sectionPrimary pt-[100vh]">
      <div class="container mt-20">
        <h2 class="headingPrimary">about</h2>
        <div class="profile">
          <div class="profile__upper">
            <div class="profile__text">
              <p class="profile__name">
                山元 稜<span lang="en">Ryo Yamamoto</span>
              </p>
              <dl class="profile__item">
                <dt class="profile__title">技術スタック</dt>
                <dd>HTML / CSS / JavaScript / TypeScript / Vue3 / Nuxt3 </dd>
              </dl>

              <dl class="profile__item">
                <dt class="profile__title">趣味</dt>
                <dd>ゲーム、温泉・サウナ、筋トレ、建築、コーヒー、自然</dd>
              </dl>
            </div>

            <figure class="profile__image">
              <img src="https://placehold.jp/260x260.png" alt="">
            </figure>
          </div><!-- profile__upperここまで -->

          <p class="profile__message">
            自己紹介を入れましょう。出身や経歴と現在の仕事内容を簡単に話すのも良し。
            <br>数年後の目標や今学んでいること、活動している内容を入れるのもいいかと思います。
          </p>
        </div><!-- profileここまで -->
      </div><!-- containerここまで -->
    </section><!-- aboutセクションここまで -->

    <section class="sectionPrimary background--gray">
      <div class="container">
        <h2 class="headingPrimary">works</h2>
        <ol class="row works">
          <li v-for="work in data?.contents" :key="work.id" class="works__item">
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

        <p class="button-area">
          <NuxtLink to="/works" class="buttonPrimary">View More</NuxtLink>
        </p>
      </div>
    </section>
  </div>
</template>