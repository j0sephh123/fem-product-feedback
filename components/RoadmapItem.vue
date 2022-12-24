<script setup lang="ts">
defineProps<{
  label: "Planned" | "In-Progress" | "Live";
  value: string;
}>();

</script>

<template>
  <div class="roadmapItem" :class="{
    planned: label === 'Planned',
    live: label === 'Live',
    inProgress: label === 'In-Progress',
  }">
    <span class="label">{{ label }}</span>
    <span class="value">{{ value }}</span>
  </div>
</template>

<style scoped lang="scss">
.roadmapItem {
  @include flex-between();
  padding-left: 24px;
  color: $dark-3;
  position: relative;

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
    left: 0;
  }

  .label {}

  .value {
    font-family: 'Jost-Bold';
  }
}
</style>