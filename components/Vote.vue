<script setup lang="ts">
defineProps<{ isActive: boolean }>()
</script>

<template>
  <div class="wrapper" :class="{ active: isActive }">
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6l4-4 4 4" :stroke="isActive ? '#fff' : '#4661E6'" stroke-width="2" fill="none" fill-rule="evenodd" />
    </svg>
    <span>
      <slot />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: $light-1;
  border-radius: $border-radius;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px;
  padding-top: 14px;
  cursor: pointer;

  &.active {
    background-color: $blue-1;

    span {
      color: $white;
    }
  }

  &:hover {
    background-color: $blue-3;
  }

  span {
    font-family: "Jost-Bold";
  }
}
</style>