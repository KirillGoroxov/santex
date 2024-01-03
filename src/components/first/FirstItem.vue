<script setup>
defineProps({
  image: String,
  title: String,
  text: String,
});
</script>
<template>
  <div
    class="mb-6 md:mb-0 md:w-[407px] md:text-lg text-2xl items-center md:items-start grid grid-cols-[1fr_3fr] sm:grid-cols-[1fr_5fr]"
  >
    <img :src="image" alt="icon" class="mr-[25px] w-[80px] md:w-14 inline" />
    <div class="inline">
      <b class="text-black">{{ title }}</b>
      <p class="text-lightgray">{{ text }}</p>
    </div>
  </div>
</template>
