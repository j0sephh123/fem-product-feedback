<template>
  <div class="controls">
    <ControlsSuggestions />
    <div class="sort">
      <span>Sort by</span>
      :
      <span class="value">Most Upvotes</span>
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1l4 4 4-4" stroke="#fff" stroke-width="2" fill="none" fill-rule="evenodd" />
      </svg>
    </div>
    <div class="feedback">
      <FeedbackButton />
    </div>
  </div>
</template>

<style scoped lang="scss">
.controls {
  display: flex;
  background-color: $dark-1;
  padding: 14px;
  border-radius: $border-radius;
  color: $white;
  width: $width-main;
  align-items: center;
  padding: 24px;
  margin-bottom: 24px;
  gap: 38px;

  .sort {
    cursor: pointer;
    font-size: 14px;

    .value {
      font-family: "Jost-Bold";
      padding-right: 8px;
    }
  }

  .feedback {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }
}
</style>