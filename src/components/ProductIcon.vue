<template>
  <component :is="componentsMap[icon]" />
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import Github from '@/assets/images/github.svg'
import Linkedin from '@/assets/images/linkedin.svg'
import Twitter from '@/assets/images/twitter.svg'
import Hashnode from '@/assets/images/hashnode.svg'

const componentsMap = {
  Github,
  Linkedin,
  Twitter,
  Hashnode,
}

defineProps({
  icon: {
    type: String as PropType<keyof typeof componentsMap>,
    required: true,
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})
</script>

<style scoped>
svg,
:deep(svg),
:deep(svg *) {
  fill: v-bind(color);
}
</style>
