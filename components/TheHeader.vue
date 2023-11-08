<template>
  <header class="glass w-full fixed z-10">
    <div class="headerContainer flex justify-between items-center  h-20 md:h-32 max-w-7xl  inset-0 mx-auto px-5 sm:px-8 lg:px-10">
      <component :is="isTopPage ? 'h1' : 'p' " class="logo text-2xl md:text-4xl text-white font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r to-emerald-600 from-sky-400 duration-200 ease-linear hover:animate-pulse">
        <NuxtLink to="/">My Portfolio</NuxtLink>
      </component>
      <HamburgerMenu></HamburgerMenu>
      <nav class="hidden md:inline-block">
        <ul class="flex gap-x-10 text-white md:text-2xl">
          <li class="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r to-emerald-600 from-sky-400 duration-200 ease-linear hover:animate-pulse">
            <NuxtLink to="/" class="menu__link">Home</NuxtLink>
          </li>
          <li class="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r to-emerald-600 from-sky-400 duration-200 ease-linear hover:animate-pulse">
            <NuxtLink to="/#about" class="menu__link">About</NuxtLink>
          </li>
          <li class="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r to-emerald-600 from-sky-400 duration-200 ease-linear hover:animate-pulse">
            <NuxtLink to="/skills" class="menu__link">Skills</NuxtLink>
          </li>
          <li class="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r to-emerald-600 from-sky-400 duration-200 ease-linear hover:animate-pulse">
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