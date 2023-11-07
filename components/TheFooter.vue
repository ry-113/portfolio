<template>
  <footer class="glass text-white bg-zinc-700 pt-8">
    <div class="footerContainer mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex items-center justify-between mb-6">
      <ul class="contact-address-list text-sm">
        <li class="py-1">国立職業リハビリテーションセンター</li>
        <li class="py-1">DTP・Web技術科</li>
        <li class="py-1">TEL:042-995-1711</li>
        <li class="py-1">E-Mail:nvdw23029@nvrcd.ac.jp</li>
      </ul>
      <ul class="sns-link-list">
        <li>
          <NuxtLink to="https://github.com/ry-113">
            <ClientOnly>
              <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
            </ClientOnly>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <p class="copyright text-center">
      <small>&copy; 2023 My Portfolio All Rights Reserved.</small>
    </p>
  </footer>
</template>