<template>
  <div class="hamburger inline-block md:hidden">
    <button class="z-10 text-3xl" @click="toggleMenu">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
    <nav class="flex justify-center items-center z-20 transition ease-out duration-1000 delay-75" :class="isMenuOpen ? 'opacity-90' : 'opacity-0'">
      <button class="absolute z-30 top-11 right-5.5 text-4xl text-white" @click="toggleMenu">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </button>
      <ul class="bg-gray-500 absolute inset-0 h-screen text-white">
        <li class="pl-5 text-xl my-3" @click="toggleMenu">
          <NuxtLink to="/#about" class="menu__link inline-block py-2 px-4">About</NuxtLink>
        </li>
        <li class="pl-5 text-xl my-3" @click="toggleMenu">
          <NuxtLink to="/skills" class="menu__link inline-block py-2 px-4">Skills</NuxtLink>
        </li>
        <li class="pl-5 text-xl my-3" @click="toggleMenu">
          <NuxtLink to="/works" class="menu__link inline-block py-2 px-4">Works</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
