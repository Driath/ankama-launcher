<script setup lang="ts">
import Box from '../box/box.vue'
import { LeftBarProps } from './left-bar.props'
import MenuItem from './menu-item/menu-item.vue'

const props = defineProps<LeftBarProps>()
</script>
<template>
  <Box class="flex gap-8 pt-8">
    <div class="flex justify-center">
      <img class="h-14" src="/src/assets/img/logo.png" />
    </div>
    <div class="flex flex-1 flex-col justify-between">
      <div>
        <MenuItem v-for="item in props.upItems" :key="item.title" :item="item" />
      </div>
      <div>
        <MenuItem v-for="item in props.downItems" :key="item.title" :item="item" />
      </div>
    </div>
  </Box>
</template>
