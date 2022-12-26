<script lang="ts" setup>
const comment: CommentType = {
  name: 'Elijah Moss',
  avatar: 'anne',
  handle: '@hexagon.bestagon',
  text: `Also, please allow styles to be applied based on system preferences. I would love
        to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright
        background it currently has.`

}
</script>

<template>
  <div class="comments">
    <div class="comments__title">4 Comments</div>
    <CommentsComment :comment="comment" />
    <!-- <CommentsComment :has-replies="true" /> -->
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