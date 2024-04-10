<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  MenubarTrigger,
  type MenubarTriggerProps,
  useForwardProps,
} from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
  MenubarTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <MenubarTrigger v-bind="forwardedProps">
    <slot />
  </MenubarTrigger>
</template>
