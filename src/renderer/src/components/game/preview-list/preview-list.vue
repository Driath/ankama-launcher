<script setup lang="ts">
import GET from '@renderer/services/game/GET'
import { onMounted, ref } from 'vue'
import GameComponent from '../game.vue'
import { Game } from '@prisma/client'

enum State {
  START,
  LOADING,
  COMPLETE
}

const state = ref<State>(State.START)
const games = ref<Game[]>([])

onMounted(async () => {
  state.value = State.LOADING
  try {
    games.value = (await GET()) as Game[]
    state.value = State.COMPLETE
  } catch (e) {
    console.error(e)
    state.value = State.START // Handle error case, reset to START or create an ERROR state
  }
})
</script>

<template>
  <h2 class="text-2xl pb-4 font-semibold">New Game Releases</h2>

  <div v-if="state === State.START"></div>

  <div v-if="state === State.LOADING" class="flex gap-2">
    <div class="flex items-center justify-center h-full">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  </div>

  <div v-if="state === State.COMPLETE" class="overflow-x-auto w-full">
    <div :class="`flex-none flex w-[${1 / 3}%] gap-2`">
      <div v-for="game in games" :key="game.id" class="flex-none w-1/3">
        <GameComponent :id="game.id" />
      </div>
    </div>
  </div>
</template>
