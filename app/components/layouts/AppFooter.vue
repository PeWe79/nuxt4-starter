<script setup lang="ts">
import { useFooterLinks } from '../../composables/useNavigation'

const { footerLinks } = useFooterLinks()
</script>

<template>
  <USeparator icon="i-simple-icons-nuxtdotjs" class="h-px" />

  <footer>
    <div
      class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3"
    >
      <div class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1">
        <p class="text-muted text-sm">
          Copyright © 2016-{{ new Date().getFullYear() }} Nuxt -
          <NuxtLink class="hover:underline" to="https://go.nuxt.com/license" target="_blank"> MIT License </NuxtLink>
        </p>
      </div>

      <div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"></div>

      <div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3">
        <UButton color="neutral" variant="ghost" to="https://go.nuxt.com/x" target="_blank" icon="i-simple-icons-x">
          <span class="sr-only">Nuxt on X</span>
        </UButton>
        <UButton
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/bluesky"
          target="_blank"
          icon="i-simple-icons-bluesky"
        >
          <span class="sr-only">Nuxt on BlueSky</span>
        </UButton>
        <UButton
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/linkedin"
          target="_blank"
          icon="i-simple-icons-linkedin"
        >
          <span class="sr-only">Nuxt on LinkedIn</span>
        </UButton>
        <UButton
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/discord"
          target="_blank"
          icon="i-simple-icons-discord"
        >
          <span class="sr-only">Nuxt on Discord</span>
        </UButton>
        <UButton
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/github"
          target="_blank"
          icon="i-simple-icons-github"
        >
          <span class="sr-only">Nuxt on GitHub</span>
        </UButton>
      </div>
    </div>
  </footer>
</template>
