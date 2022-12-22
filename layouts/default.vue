<template>
  <div class="header">
  </div>
  <slot />
</template>

<style lang="scss">
* {
  font-family: 'Jost-Regular';
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: $light-2;
}

.header {
  .item {
    color: $purple;
    font-size: 3rem;
    font-family: 'Jost-SemiBold';
  }
}
</style>