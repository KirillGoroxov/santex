<script setup>
defineProps({
  image: String,
  widthImage: Number,
  title: String,
  description: String,
});
</script>
<template>
  <div
    class="w-[320px] m:w-[400px] grid grid-cols-[1fr_3fr] md:flex flex-col items-center md:text-center md:w-[300px]"
  >
    <div style="" class="relative mr-4 flex justify-center h-20 w-20">
      <img
        :src="image"
        alt="img"
        class="w-20"
        :style="{ width: widthImage + 'px' }"
      />
      <img
        src="/firth/5.svg"
        v-if="image === '/firth/1.svg'"
        class="absolute top-[25px] left-[35px]"
      />
    </div>
    <div class="">
      <h4 class="text-xl">{{ title }}</h4>
      <div class="text-[#7B7B7B] text-[15px]">{{ description }}</div>
    </div>
  </div>
</template>
