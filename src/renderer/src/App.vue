<script setup lang="ts">
import { ref } from 'vue'
import Layout from './components/layout/layout.vue'
import LeftBar from './components/left-bar/left-bar.vue'
import Box from './components/box/box.vue'
import PreviewList from './components/game/preview-list/preview-list.vue';

const leftUpItems = ref([
  {
    title: 'Accueil',
    icon: 'home',
    active: true
  },
  {
    title: 'Découverte',
    icon: 'search'
  },
  {
    title: 'Récent',
    icon: 'backward'
  },
  {
    title: 'Sauvegarde',
    icon: 'save'
  },
  {
    title: 'Téléchargement',
    icon: 'download'
  }
])

const leftdownItems = ref([
  {
    title: 'Paramètres',
    icon: 'cog'
  },
  {
    title: 'Se déconnecter',
    icon: 'sign-out-alt'
  }
])
</script>

<template>
  <Layout>
    <template #left-bar>
      <LeftBar :down-items="leftdownItems" :up-items="leftUpItems" />
    </template>
    <Box>
      <PreviewList />
    </Box>
  </Layout>
</template>
