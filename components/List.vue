<template>
  <div>
    <Card>
      <template #vote>
        <Vote :isActive="true">112</Vote>
      </template>
      <template #button>
        <Button>Enhancement</Button>
      </template>
      <template #commentLabel>
        <CommentLabel>22</CommentLabel>
      </template>
    </Card>
  </div>
</template>  

<style scoped lang="scss">

</style>