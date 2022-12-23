<template>
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
  <Card>
    <template #vote>
      <Vote :isActive="false">56</Vote>
    </template>
    <template #button>
      <Button>Test</Button>
    </template>
    <template #commentLabel>
      <CommentLabel>22</CommentLabel>
    </template>
  </Card>
  <Card>
    <template #vote>
      <Vote :isActive="false">5</Vote>
    </template>
    <template #button>
      <Button>Demo</Button>
    </template>
    <template #commentLabel>
      <CommentLabel>11</CommentLabel>
    </template>
  </Card>
</template>  

<style scoped lang="scss">

</style>