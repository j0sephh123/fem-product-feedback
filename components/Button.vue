<script setup>
defineProps({
  isActive: Boolean
})
</script>

<template>
  <div class="button" :class="{ active: isActive }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.button {
  margin-top: 3px;
  margin-bottom: 3px;
  color: $blue-1;
  background-color: $light-1;
  font-family: 'Jost-Bold';
  font-size: 13px;
  display: inline-block;
  padding: 5px 16px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: $blue-3;
  }

  &.active {
    color: $white;
    background-color: $blue-1;
  }
}
</style>