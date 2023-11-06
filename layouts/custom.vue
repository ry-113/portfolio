<template>
    <TheHeader class="header"/>
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
    <div class="wrapper mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-white bg-zinc-800">
      <main class="main  mx-auto max-w-5xl">
        <slot/>
      </main>
    </div>
    <TheFooter/>

  </template>