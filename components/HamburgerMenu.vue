<template>
  <div class="hamburger inline-block md:hidden">
    <button @click="toggleMenu">+</button>
    <nav>
      <ul v-if="isMenuOpen" class="mobile-menu">
        <li>
          <NuxtLink to="/#about" class="menu__link">About</NuxtLink>
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
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
