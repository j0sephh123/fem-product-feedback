<template>
  <div class="comments">
    <div class="comments__title">4 Comments</div>
    <CommentsComment />
    <CommentsComment :has-replies="true" />
  </div>
</template>

<style lang="scss" scoped>
.comments {
  width: 730px;
  background-color: $white;
  border-radius: $border-radius;
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 48px;

  .comments__title {
    font-family: "Jost-Bold";
    font-size: 18px;
    color: $dark-2;
  }
}
</style>