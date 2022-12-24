<template>
  <div class="card">
    <div class="vote">
      <slot name="vote"></slot>
    </div>
    <div class="content">
      <span class="title">Add tags for solutions</span>
      <span class="description">Easier to search for solutions based on a specific stack.</span>
      <slot name="button"></slot>
    </div>
    <div class="comments">
      <slot name="commentLabel"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: $white;
  border-radius: $border-radius;
  padding: 28px 32px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.vote {
  padding-right: 40px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  .title {
    font-size: 18px;
    font-family: "Jost-Bold";
  }

  .description {
    padding-bottom: 8px;
    color: $dark-3;
  }

}

.comments {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  gap: 8px;


}
</style>