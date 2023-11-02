<template>
  <div class="child">
    <div class="childMainVisual">
      <div class="container container--lg">
        <h1 class="childMainVisual__title">Works</h1>
        <p>成果物をご紹介します。</p>
      </div>
    </div>

    <div class="container">
      <ol class="row works">
        <li class="works__item">
          <NuxtLink to="/works/111" class="works__inner">
            <figure class="works__image">
              <img src="https://placehold.jp/370x229.png" alt="">
            </figure>
            <div class="works__text">
              <p class="works__name">作品名</p>
              <p class="works__date">
                <time datetime="2023-11-02">2023.11.2</time>
              </p>
            </div>
          </NuxtLink>
        </li>
        <li class="works__item">
          <NuxtLink to="/works/111" class="works__inner">
            <figure class="works__image">
              <img src="https://placehold.jp/370x229.png" alt="">
            </figure>
            <div class="works__text">
              <p class="works__name">作品名</p>
              <p class="works__date">
                <time datetime="2023-11-02">2023.11.2</time>
              </p>
            </div>
          </NuxtLink>
        </li>
      </ol>
    </div>
  </div>
</template>