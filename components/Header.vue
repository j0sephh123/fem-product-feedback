<template>
  <header>
    <div class="title">Frontend Mentor</div>
    <div class="subtitle">Feedback Board</div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-image: url('../assets/images/background-header.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: $white;
  border-radius: 10px;
  display: inline-block;
  padding: 24px;
  width: 255px;
  height: 137px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-position-x: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .title {
    font-size: 20px;
    font-family: 'Jost-Bold';
  }

  .subtitle {
    font-size: 15px;
    opacity: 0.75;
    margin-bottom: 0;
  }
}
</style>