<template>
  <div class="wrapper">
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
      <div class="button">
        <span class="plus">+</span>
        <span>Add Feedback</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  background-color: $dark-1;
  padding: 14px;
  border-radius: $border-radius;
  color: $white;
  width: 825px;
  align-items: center;
  padding: 24px;



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

    .button {
      text-align: right;
      background-color: $purple;
      border-radius: $border-radius;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 12px 24px;

      .plus {
        padding-right: 4px;
      }

      span {
        font-family: 'Jost-Bold';
        font-size: 14px;
      }
    }
  }
}
</style>