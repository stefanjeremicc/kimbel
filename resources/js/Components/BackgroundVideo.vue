<template>
  <div class="background-video">
    <video autoplay loop muted>
      <source :src="videoUrl" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
