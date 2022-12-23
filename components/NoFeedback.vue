<template>
  <div class="container">
    <div class="wrapper">
      <img src="~assets/svgs/illustration-empty.svg" />
      <h1>There is no feedback yet.</h1>
      <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
      </p>
      <FeedbackButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: $width-main;
  background-color: $white;
  height: 600px;
  border-radius: $border-radius;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    padding-top: 52px;
    padding-bottom: 16px;
  }

  p {
    padding-bottom: 48px;
  }

  .wrapper {
    width: 410px;
    text-align: center;

    .button {
      display: inline;
    }
  }
}
</style>