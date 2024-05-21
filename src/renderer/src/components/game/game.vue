<script lang="ts" setup>
// import { Game } from '@prisma/client'

import { Game } from '@prisma/client'
import ID from '@renderer/services/game/ID'
import { launchApp } from '@renderer/services/launch/launch'
import { onMounted, ref } from 'vue'
const props = defineProps<{ id: string }>()
const { id } = props

const title = ref<string | null>('')
const slug = ref('')

const launchAppHandler = () => launchApp(slug.value)

onMounted(async () => {
  try {
    const game = (await ID(id)) as Game
    slug.value = game.slug
    title.value = game.title
  } catch (e) {
    // manage error there
    console.log(e)
  }
})
</script>
<template>
  <div class="flex gap-2 flex-col">
    <img v-if="slug" class="aspect-video" :src="`./src/assets/games/${slug}/thumbnail.png`" />
    <div v-else class="bg-gray-200 animate-pulse aspect-video"></div>
    <h3 v-if="title !== ''">{{ title }}</h3>
    <div v-else class="bg-gray-900 animate-pulse rounded-3xl">&nbsp;</div>
    <button v-if="slug" class="p-2 bg-orange-400" @click="launchAppHandler">Lancer</button>
  </div>
</template>
