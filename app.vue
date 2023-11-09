<script setup lang="ts">
useSeoMeta({
  charset: "utf-8",
  title: "My Portfolio",
  ogTitle: "My Portfolio",
  description: "フロントエンドエンジニアを目指す職業訓練生のポートフォリオサイトです。",
  ogDescription: "フロントエンドエンジニアを目指す職業訓練生のポートフォリオサイトです。",
})
useHead({
  bodyAttrs: {
    class: "bg-zinc-800 text-white",
  },
  htmlAttrs: {
    lang: "ja",
    class: "smooth-scroll"
  }
});
</script>
<template>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
</template>