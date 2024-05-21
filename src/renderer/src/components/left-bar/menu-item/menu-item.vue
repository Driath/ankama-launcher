<script setup lang="ts">
import { MenuItemsProps } from './menu-item.props'

const props = defineProps<MenuItemsProps>()
const {
  item: { icon, title, active }
} = props
</script>

<template>
  <div :class="active && 'bg-white bg-opacity-5 rounded-md'">
    <div class="flex gap-2 justify-start items-center px-3 py-2 cursor-pointer">
      <v-icon :name="'fa-' + icon" class="size-6" />
      <span class="font-semibold text-xl tex">
        {{ title }}
      </span>
    </div>
  </div>
</template>
