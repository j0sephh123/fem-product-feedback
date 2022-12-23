<script setup lang="ts">
defineProps<{
  label: "Planned" | "In-Progress" | "Live";
  value: string;
}>();

</script>

<template>
  <div class="item" :class="{
    planned: label === 'Planned',
    live: label === 'Live',
    inProgress: label === 'In-Progress',
  }">
    <span class="label">{{ label }}</span>
    <span class="value">{{ value }}</span>
  </div>
</template>

<style scoped lang="scss">
.item {
  @include flex-between();
  padding-left: 24px;
  color: $dark-3;

  &.planned {
    &::before {
      background-color: $orange;
    }
  }

  &.live {
    &::before {
      background-color: $blue-2;
    }
  }

  &.inProgress {
    &::before {
      background-color: $purple;
    }
  }

  &::before {
    position: absolute;
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    left: 24px;
  }

  .label {}

  .value {
    font-family: 'Jost-Bold';
  }
}
</style>