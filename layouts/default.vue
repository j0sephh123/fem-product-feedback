<template>
  <div class="header">
    header
    <div class="item">red</div>
    <slot />
  </div>
</template>

<style lang="scss">
.header {
  .item {
    color: $purple;
    font-size: 3rem;
    font-family: 'Jost-SemiBold';
  }
}
</style>