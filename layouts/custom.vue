<template>
    <TheHeader class="header"/>
    <div class="mainVisual absolute inset-0 w-full h-[100vh]">
      <picture>
        <source
        srcset="~/assets/mainvisual.jpg"
        media="(max-width: 767px)"
        class="w-full h-full inset-0 object-cover"
        />
        <img src="~/assets/mainvisual.jpg" alt="" class="w-full h-full object-cover">
      </picture>
      <div class="overlay absolute top-0 -right-0 w-full h-full bg-gradient-to-r from-gray-950 to-transparent">
        <p class="catchcopy text-4xl md:text-7xl lg:text-8xl relative top-[35vh] pl-5 md:pl-8 lg:pl-[10vw] inline-block w-[70%] animate-text-flicker-in-glow">
          IF YOU CAN IMAGINE IT,
          <br>YOU CAN <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">CREATE</span> IT.
        </p>
        <div class="scrolldown absolute bottom-[1%] right-[50%] animate-arrow-move delay-1000 before:absolute before:bottom-0 before:-right-[6px] before:w-[1px] before:h-5 before:bg-white before:skew-x-[-31deg] after:absolute after:bottom-0 after:right-0 after:w-[1px] after:h-[60px] after:bg-white">
          <span class="absolute right-1 bottom-3 vertical-rl">Scroll</span></div>
        </div>
    </div>
    <div class="wrapper mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-white bg-zinc-800">
      <main class="main  mx-auto max-w-5xl">
        <slot/>
      </main>
    </div>
    <TheFooter/>

  </template>