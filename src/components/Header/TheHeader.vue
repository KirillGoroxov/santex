<script setup>
import TheHead from './TheHead/TheHead.vue';
import TheLeft from './TheLeft.vue';
import TheRight from './TheRight.vue';
</script>
<template>
  <div class="bg-[url('/header/2.png')] w-full h-[700px] overflow-hidden">
    <TheHead />
    <div class="justify-between mx-auto 2xl:w-[1300px] lg:flex relative">
      <TheLeft class="2xl:ml-[3vw] md:ml-[5vw] md:mt-[5vh]" />
      <div
        class="absolute left-1/2 top-[85px] overflow-hidden lg:relative lg:left-0 lg:top-[110px]"
      >
        <TheRight />
      </div>
    </div>
  </div>
</template>
