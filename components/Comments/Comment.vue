<script setup lang="ts">
type Props = {
  hasReplies: boolean;
  comment: CommentType
}

const { hasReplies, comment } = withDefaults(defineProps<Props>(), {
  hasReplies: false
})

</script>

<template>
  <div class="comment" :class="{ isRoot: hasReplies }">
    <img class="comment__avatar" :src="`/_nuxt/public/images/image-${comment.avatar}.jpg`" />
    <div class="comment__main">
      <div class="comment__main--header">
        <div class="comment__main--header_left">
          <div class="comment__main--header_left_name">{{ comment.name }}</div>
          <div class="comment__main--header_left_handle">{{ comment.handle }}</div>
        </div>
        <div class="comment__main--header_right">Reply</div>
      </div>

      <div class="comment__main--text">{{ comment.text }}</div>
    </div>
  </div>
  <template v-if="hasReplies">
    <div class="comment" :class="{ hasReplies }">
      <img class="comment__avatar" src="~assets/images/image-anne.jpg" />
      <div class="comment__main">
        <div class="comment__main--header">
          <div class="comment__main--header_left">
            <div class="comment__main--header_left_name">Anne Valentine</div>
            <div class="comment__main--header_left_handle">@annev1990</div>
          </div>
          <div class="comment__main--header_right">Reply</div>
        </div>

        <div class="comment__main--text"><span class="comment__main--text_handle">@hummingbird1</span> While waiting for
          dark mode, there are browser extensions that
          will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the
          extension for sites with naturally black backgrounds though.</div>
      </div>
    </div>
  </template>
</template>

<style lang="scss" scoped>
.comment {
  display: flex;
  gap: 32px;
  padding-top: 36px;
  position: relative;

  &.isRoot {
    &::before {
      content: "";
      position: absolute;
      background-color: $dark-3;
      opacity: 0.1;
      width: 1px;
      height: 267px;
      left: 20px;
      top: 100px;
    }
  }

  &.hasReplies {
    padding-left: 42px;


  }

  &__avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  &__main {
    &--header {
      padding-bottom: 16px;
      display: flex;
      justify-content: space-between;

      &_left {
        font-size: 14px;

        &_name {
          font-family: 'Jost-Bold';
          color: $dark-2;
        }

        &_handle {
          color: $dark-3;
        }
      }

      &_right {
        color: $blue-1;
        font-family: 'Jost-Bold';
        font-size: 13px;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    &--text {
      color: $dark-3;

      &_handle {
        font-family: 'Jost-Bold';
        color: $purple;
      }
    }
  }
}
</style>