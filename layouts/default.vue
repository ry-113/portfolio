<template>
  <div class="min-h-screen">
    <TheHeader class="header"/>
    <div class="wrapper mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <main class="main  mx-auto max-w-5xl">
        <slot/>
      </main>
    </div>
    <TheFooter class="sticky top-[100vh]"/>
  </div>
</template>