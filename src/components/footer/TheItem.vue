<script setup>
defineProps({
  title: String,
});
</script>
<template>
  <div class="flex mb-5">
    <img src="/header/arrow.svg" alt="" />
    <p class="text-[#BEBEBE] text-base ml-3">{{ title }}</p>
  </div>
</template>
