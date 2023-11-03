<template>
  <footer class="footer bg-zinc-800 text-white pt-8 mt-10">
    <div class="footerContainer mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex items-center justify-between">
      <ul class="contact-address-list text-sm">
        <li>国立職業リハビリテーションセンター</li>
        <li>DTP・Web技術科</li>
        <li>TEL:042-995-1711</li>
        <li>E-Mail:nvdw23029@nvrcd.ac.jp</li>
      </ul>
      <ul class="sns-link-list">
        <li>
          <NuxtLink to="url">
            <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <p class="copyright text-center">
      <small>&copy; 2023 My Portfolio All Rights Reserved.</small>
    </p>
  </footer>
</template>