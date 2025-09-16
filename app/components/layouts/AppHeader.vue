<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import NuxtLogo from '../NuxtLogo.vue'

const colorMode = useColorMode()
const route = useRoute()
const { headerLinks } = useHeaderLinks()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})

const mobileNavigation = computed<ContentNavigationItem[]>(() => {
  return [
    ...headerLinks.value.slice(0).map(
      (link) =>
        ({
          ...link,
          title: link.label,
          path: link.to,
          children: link.children?.map((child) => ({
            ...child,
            title: child.label,
            path: child.to,
          })),
        }) as ContentNavigationItem
    ),
  ].filter((item): item is ContentNavigationItem => Boolean(item))
})

const defaultOpen = computed(() => {
  const topLevelWithChildren = mobileNavigation.value.filter((link) => link.children?.length)
  const currentPath = route.path

  return topLevelWithChildren.some((link) =>
    link.children?.some((child) => currentPath.startsWith(child.path as string))
  )
})
</script>

<template>
  <header class="bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50">
    <div
      class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-full"
    >
      <div class="lg:flex-1 flex items-center gap-1.5">
        <NuxtLink to="/" class="flex gap-2 items-end" aria-label="Back to home">
          <NuxtLogo ref="logo" class="block w-auto h-6" />
        </NuxtLink>
      </div>

      <div class="hidden lg:flex">
        <UNavigationMenu :items="headerLinks" variant="link" :ui="{ linkLeadingIcon: 'hidden' }" />
      </div>

      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <UTooltip text="Dark/Light mode">
          <UButton
            :ui="{
              label: 'hidden sm:inline-flex',
            }"
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            size="md"
            variant="ghost"
            color="neutral"
            @click="isDark = !isDark"
          />
        </UTooltip>

        <UTooltip text="GitHub Stars">
          <UButton
            icon="i-simple-icons-github"
            to="https://github.com/PeWe79/nuxt4-starter.git"
            target="_blank"
            variant="ghost"
            color="neutral"
            :ui="{
              label: 'hidden sm:inline-flex',
            }"
          >
            <span class="sr-only">Nuxt on GitHub</span>
          </UButton>
        </UTooltip>

        <UDropdownMenu
          :items="mobileNavigation"
          :default-open="defaultOpen"
          :content="{
            align: 'start',
            side: 'bottom',
            sideOffset: 8,
          }"
          :ui="{
            content: 'w-48',
          }"
        >
          <UButton icon="i-lucide-menu" color="neutral" variant="ghost" class="lg:hidden" />
        </UDropdownMenu>
      </div>
    </div>
  </header>
</template>
