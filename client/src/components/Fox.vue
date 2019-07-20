<template>
  <div>
    <img class="home-img" :src="image" />
  </div>
</template>

<script>
export default {
  name: 'Fox',
  props: ['image']
}
</script>

<style scoped>

.home-img {
  width: 70%;
}

</style>
