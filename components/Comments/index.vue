<script lang="ts" setup>
const comment: CommentType = {
  id: "1",
  name: 'Elijah Moss',
  avatar: 'anne',
  handle: '@hexagon.bestagon',
  text: `Also, please allow styles to be applied based on system preferences. I would love
        to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright
        background it currently has.`
}

const replies: CommentType[] = [
  {
    id: '2',
    name: 'James Skinner',
    avatar: 'james',
    handle: '@hummingbird1',
    text: `Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.`,
  },
  {
    id: '3',
    name: 'Anne Valentine ',
    avatar: 'george',
    handle: '@annev1990',
    text: `@hummingbird1  While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.`,
  },
  {
    id: '4',
    name: 'Ryan Welles',
    avatar: 'ryan',
    handle: '@voyager.344',
    text: `@annev1990  Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.`,
  },
]

</script>

<template>
  <div class="comments">
    <div class="comments__title">4 Comments</div>
    <!-- <CommentsComment :comment="comment" /> -->
    <CommentsComment :comment="comment" :replies="replies" />
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