<template>
  <div class="wrapper">
    <div class="top">
      <span class="roadmap">Roadmap</span>
      <span class="view">View</span>
    </div>
    <div class="bottom">
      <div>
        <span class="label">Planned</span>
        <span class="value">2</span>
      </div>
      <div>
        <span class="label">In-Progress</span>
        <span class="value">3</span>
      </div>
      <div>
        <span class="label">Live</span>
        <span class="value">1</span>
      </div>
    </div>
  </div>
</template> 

<style scoped lang="scss">
.wrapper {
  background-color: $white;
  border-radius: 10px;
  width: 255px;
  height: 178px;
  padding: 24px;

  .top {
    @include flex-between();

    .roadmap {
      font-family: 'Jost-Bold';
      color: $dark-2;
      font-size: 18px;
    }

    .view {
      color: $blue-1;
      font-family: 'Jost-SemiBold';
      text-decoration: underline;
      font-size: 13px;
    }
  }

  .bottom {
    @include flex-between();

    .item {
      .label {}

      .value {}
    }
  }
}
</style>