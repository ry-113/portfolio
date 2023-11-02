<template>
  <header class="header">
    <div class="headerContainer">
      <component :is="isTopPage ? 'h1' : 'p' " class="logo">
        <NuxtLink to="/">My Portfolio</NuxtLink>
      </component>

      <nav>
        <ul class="menu">
          <li>
            <NuxtLink to="/#about" class="menu__link">about</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/works" class="menu__link">works</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();

const isTopPage = computed(():boolean => {
  if (route.name === "index") {
    return true;
  }
  return false;
});
</script>