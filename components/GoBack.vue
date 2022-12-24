<template>
  <div class="goBack">
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd" />
    </svg>
    <span>Go Back</span>
  </div>

</template>

<style scoped lang="scss">
.goBack {
  cursor: pointer;

  &:hover {
    span {
      text-decoration: underline;
    }
  }

  span {
    padding-left: 16px;
    font-family: "Jost-Bold";
    font-size: 14px;
    color: $dark-3;
  }
}
</style>