<template>
  <div class="flex flex-row flex-1 gap-8 p-8">
    <div class="basis-1/3 flex">
      <slot name="left-bar"></slot>
    </div>
    <div class="basis-2/3 flex">
      <slot></slot>
    </div>
  </div>
</template>
