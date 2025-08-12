<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import AppFooter from '../components/AppFooter.vue'
import AppHeader from '../components/AppHeader.vue'
import HeroBackground from '../components/HeroBackground.vue'

const route = useRoute()
const heroBackgroundClass = computed(() => route.meta?.heroBackground || '')
const { isLoading } = useLoadingIndicator()

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
  <div>
    <AppHeader />
    <main>
      <HeroBackground
        class="absolute w-full -top-px transition-all text-primary shrink-0 -z-10"
        :class="[
          isLoading ? 'animate-pulse' : appear ? heroBackgroundClass : 'opacity-0',
          appeared ? 'duration-[400ms]' : 'duration-1000',
        ]"
      />
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
