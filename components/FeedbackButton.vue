<template>
  <div class="feedbackButtonWrapper">
    <span class="plus">+</span>
    <span>Add Feedback</span>
  </div>
</template>

<style lang="scss" scoped>
.feedbackButtonWrapper {
  text-align: right;
  background-color: $purple;
  border-radius: $border-radius;
  cursor: pointer;
  padding: 12px 24px;
  color: $white;

  .plus {
    padding-right: 4px;
  }

  span {
    font-family: 'Jost-Bold';
    font-size: 14px;
  }
}
</style>