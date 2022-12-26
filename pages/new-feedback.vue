<script setup lang="ts">
const sections = [
  { title: 'Feedback Title', description: "Add a short, descriptive headline" },
  { title: 'Category', description: "Choose a category for your feedback" },
  { title: 'Feedback Detail', description: "Include any specific comments on what should be improved, added, etc." },
]
</script>

<template>
  <div class="newFeedbackWrapper">
    <div class="newFeedback">
      <div class="newFeedback__heading">Create New Feedback</div>
      <NewFeedbackSection v-for="{ title, description } in sections" :key="title" :title="title"
        :description="description" />
      <div class="newFeedback__footer">
        <Button>Cancel</Button>
        <Button>Add Feedback</Button>
      </div>
    </div>
  </div>
</template>
  
<style lang="scss" scoped>
.newFeedbackWrapper {
  display: flex;
  justify-content: center;
}

.newFeedback {
  padding-left: 42px;
  padding-right: 42px;
  padding-top: 52px;
  padding-bottom: 40px;
  width: 540px;
  background-color: $white;

  &__heading {
    color: $dark-2;
    font-size: 24px;
    font-family: 'Jost-Bold';
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>