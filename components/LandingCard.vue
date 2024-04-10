<template>
  <Card class="grid grid-cols-2 override overflow-clip ">
    <div class="h-full flex flex-col px-5 py-4 justify-between">
      <p class="font-bold">{{ data.title }}</p>

      <p>
        {{ data.description }}
      </p>
      <div
        class="hover:text-primary-800 border-b-primary-800 w-fit items-center hover:border-b transition-all flex gap-2 cursor-pointer"
      >
        <p>
          {{ data.action }}
        </p>
        <Icon name="fluent:arrow-right-24-filled"></Icon>
      </div>
    </div>

    <img :src="data.image"  class="h-[250px] w-full" :class="{ '-order-1': reverse }"></img>
  </Card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.override {
@apply px-0 py-0 !important}</style>