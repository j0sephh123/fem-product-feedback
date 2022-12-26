<template>
  <div class="addComment">
    <div class="addComment__title">Add Comment</div>
    <div class="addComment__field">
      <textarea class="addComment__field--textarea" placeholder="Type your comment here"></textarea>
    </div>
    <div class="addComment__footer">
      <div class="addComment__footer--charsLeft">250 Characters left</div>
      <div class="addComment__footer--button">
        <Button>Post Comment</Button>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.addComment {
  margin-top: 24px;
  background-color: $white;
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;

  &__title {
    font-size: 18px;
    font-family: 'Jost-Bold';
    color: $dark-2;
  }

  &__field {
    padding-top: 24px;
    padding-bottom: 24px;

    &--textarea {
      resize: none;
      background-color: $light-2;
      border-radius: 5px;
      border: none;
      width: 100%;
      height: 80px;
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 16px;

      &::placeholder {
        font-size: 15px;
        color: #8C92B3;
      }


      &:focus {
        outline: none;
      }
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--charsLeft {
      color: $dark-3;
    }

    &--button {}
  }


}
</style>