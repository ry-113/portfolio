<template>
  <div class="hamburger inline-block md:hidden">
    <button class="z-10 text-3xl" @click="toggleMenu">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
    <nav class="flex justify-center items-center z-20 transition ease-out duration-1000 delay-75" :class="isMenuOpen ? 'visible opacity-90' : 'invisible opacity-0'" @click="toggleMenu">
      <button class="absolute z-30 top-11 right-5.5 text-4xl text-white">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </button>
      <ul class="bg-black absolute inset-0 h-screen text-white">
        <li class="pl-5 text-xl my-3">
          <NuxtLink to="/#about" class="menu__link inline-block py-2 px-4">About</NuxtLink>
        </li>
        <li class="pl-5 text-xl my-3">
          <NuxtLink to="/skills" class="menu__link inline-block py-2 px-4">Skills</NuxtLink>
        </li>
        <li class="pl-5 text-xl my-3">
          <NuxtLink to="/works" class="menu__link inline-block py-2 px-4">Works</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { isMenuOpen, toggleMenu } = useHamburger();
</script>
