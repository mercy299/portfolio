<template>
  <component :is="componentsMap[icon]" />
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import Github from '@/assets/images/github.svg'
import Linkedin from '@/assets/images/linkedin.svg'
import Twitter from '@/assets/images/twitter.svg'
import Hashnode from '@/assets/images/hashnode.svg'
import Aws from '@/assets/images/aws.svg'
import ArgoCD from '@/assets/images/argocd.svg'
import Terraform from '@/assets/images/terraform.svg'
import Prometheus from '@/assets/images/prometheus.svg'
import Linux from '@/assets/images/linux.svg'
import Bash from '@/assets/images/bash.svg'
import Docker from '@/assets/images/docker.svg'
import Kubernetes from '@/assets/images/k8s.svg'
import GithubActions from '@/assets/images/github-actions.svg'

const componentsMap = {
  Github,
  Linkedin,
  Twitter,
  Hashnode,
  Aws,
  ArgoCD,
  Terraform,
  Prometheus,
  Linux,
  Bash,
  Docker,
  Kubernetes,
  GithubActions,
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
