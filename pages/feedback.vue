<template>
  <div class="feedbackPageWrapper">
    <div class="flex">
      <GoBack />
      <Button>Edit Feedback</Button>
    </div>
    <Card>
      <template #vote>
        <Vote :isActive="true">112</Vote>
      </template>
      <template #button>
        <Button>Enhancement</Button>
      </template>
      <template #commentLabel>
        <CommentLabel>1</CommentLabel>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.feedbackPageWrapper {
  width: 730px;
  margin: 0 auto;
  padding-top: 90px;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>