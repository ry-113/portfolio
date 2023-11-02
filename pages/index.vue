<template>
  <div>
    <div class="mainVisual">
      <picture>
        <source
        srcset="https://placehold.jp/375x530.png"
        media="(max-width: 767px)"
        />
        <img src="https://placehold.jp/1440x436.png" alt="">
      </picture>
    </div>

    <section id="about" class="sectionPrimary">
      <div class="container">
        <h2 class="headingPrimary">about</h2>
        <div class="profile">
          <div class="profile__upper">
            <div class="profile__text">
              <p class="profile__name">
                山元 稜<span lang="en">Ryo Yamamoto</span>
              </p>
              <dl class="profile__item">
                <dt class="profile__title">技術スタック</dt>
                <dd>HTML / CSS / JavaScript / TypeScript / Vue3 / Nuxt3 </dd>
              </dl>

              <dl class="profile__item">
                <dt class="profile__title">趣味</dt>
                <dd>ゲーム、温泉・サウナ、筋トレ、建築、コーヒー、自然</dd>
              </dl>
            </div>

            <figure class="profile__image">
              <img src="https://placehold.jp/260x260.png" alt="">
            </figure>
          </div><!-- profile__upperここまで -->

          <p class="profile__message">
            自己紹介を入れましょう。出身や経歴と現在の仕事内容を簡単に話すのも良し。
            <br>数年後の目標や今学んでいること、活動している内容を入れるのもいいかと思います。
          </p>
        </div><!-- profileここまで -->
      </div><!-- containerここまで -->
    </section><!-- aboutセクションここまで -->

    <section class="sectionPrimary background--gray">
      <div class="container">
        <h2 class="headingPrimary">works</h2>
        <ol class="row works">
          <li class="works__item">
            <NuxtLink to="#!" class="works__inner">
              <figure class="works__image">
                <img src="https://placehold.jp/370x229.png" alt="">
              </figure>
              <div class="works-text">
                <p class="work__name">作品名</p>
                <p class="works__date">
                  <time datetime="2023-11-02">2023.11.2</time>
                </p>
              </div>
            </NuxtLink>
          </li>
          <li class="works__item">
            <NuxtLink to="#!" class="works__inner">
              <figure class="works__image">
                <img src="https://placehold.jp/370x229.png" alt="">
              </figure>
              <div class="works-text">
                <p class="work__name">作品名</p>
                <p class="works__date">
                  <time datetime="2023-11-02">2023.11.2</time>
                </p>
              </div>
            </NuxtLink>
          </li>
        </ol>

        <p class="button-area">
          <NuxtLink to="/works" class="buttonPrimary">View More</NuxtLink>
        </p>
      </div>
    </section>
  </div>
</template>