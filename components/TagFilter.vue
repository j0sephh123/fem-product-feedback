<template>
  <div class="tagFilter">
    <Button>All</Button>
    <Button>UI</Button>
    <Button>UX</Button>
    <Button>Enhancement</Button>
    <Button>Bug</Button>
    <Button>Feature</Button>
  </div>
</template>

<style scoped lang="scss">
.tagFilter {
  background-color: $white;
  padding: 24px;
  border-radius: $border-radius;
  width: 255px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>