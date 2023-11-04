<template>
  <header class="header w-full fixed z-10 bg-white">
    <div class="headerContainer flex justify-between items-center  h-32 max-w-7xl  inset-0 mx-auto px-5 sm:px-8 lg:px-10 bg-white">
      <component :is="isTopPage ? 'h1' : 'p' " class="logo text-4xl">
        <NuxtLink to="/">My Portfolio</NuxtLink>
      </component>
      <HamburgerMenu></HamburgerMenu>
      <nav class="hidden md:inline-block">
        <ul class="menu flex gap-x-4">
          <li>
            <NuxtLink to="/#about-title" class="menu__link">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/skills" class="menu__link">Skills</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/works" class="menu__link">Works</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import HamburgerMenu from './HamburgerMenu.vue';

const route = useRoute();

const isTopPage = computed(():boolean => {
  if (route.name === "index") {
    return true;
  }
  return false;
});
</script>