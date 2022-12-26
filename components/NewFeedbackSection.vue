<script lang="ts" setup>
type Props = {
  title: string;
  description: string;
}

const { title, description } = defineProps<Props>();
</script>

<template>
  <div class="newFeedbackSection">
    <div class="newFeedbackSection__title">{{ title }}</div>
    <div class="newFeedbackSection__description">{{ description }}</div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.newFeedbackSection {
  margin-top: 24px;
  font-size: 14px;

  &__title {
    color: $dark-2;
    font-family: "Jost-Bold";
  }

  &__description {
    color: $dark-3;
    padding-bottom: 16px;
  }
}
</style>