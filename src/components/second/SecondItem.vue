<script setup>
defineProps({
  image: String,
  title: String,
});
</script>
<template>
  <div class="relative xl:m-0 mt-4">
    <img :src="image" class="" alt="paint" />
    <p class="absolute z-10 text-4xl bottom-4 left-6 md:text-2xl text-left">
      {{ title }}
    </p>
  </div>
</template>
