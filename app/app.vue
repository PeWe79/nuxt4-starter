<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const colorMode = useColorMode()
const color = computed(() => (colorMode.value === 'dark' ? '#020420' : 'white'))

useHead({
  titleTemplate: (title) => (title ? `${title} · Nuxt` : 'Nuxt4 NuxtUi Template'),
  meta: [{ key: 'theme-color', name: 'theme-color', content: color }],
})
if (import.meta.server) {
  useHead({
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
    htmlAttrs: {
      lang: 'en',
    },
  })
  useSeoMeta({
    ogSiteName: 'Nuxt',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterSite: 'nuxt_js',
  })
}

const appear = ref(false)
const appeared = ref(false)

onMounted(() => {
  setTimeout(() => {
    appear.value = true
    setTimeout(() => {
      appeared.value = true
    }, 1000)
  }, 0)
})
</script>
<template>
  <UApp>
    <NuxtLoadingIndicator color="var(--ui-primary)" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
