<template>
  <div class="roadmap">
    <div class="top">
      <span class="roadmap">Roadmap</span>
      <span class="view">View</span>
    </div>
    <div class="bottom">
      <RoadmapItem label="Planned" value="2" />
      <RoadmapItem label="In-Progress" value="3" />
      <RoadmapItem label="Live" value="1" />
    </div>
  </div>
</template> 

<style scoped lang="scss">
.roadmap {
  background-color: $white;
  border-radius: $border-radius;
  width: 255px;
  height: 178px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    display: flex;
    flex-direction: column;
    gap: 8px;


  }
}
</style>