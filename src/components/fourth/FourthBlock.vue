<script setup>
import TheItem from './TheItem.vue';
</script>
<template>
  <div class="xl:w-[1200px] w-[90%] text-[32px] mt-10 mx-auto text-black">
    <h2 class="mb-10 sm:mb-5 text-center text-4xl sm:text-3xl sm:text-left">
      Акционные товары
    </h2>
    <div class="flex flex-wrap gap-3 xl:gap-0 justify-center sm:justify-start">
      <TheItem
        img="/fourth/1.png"
        title="O-mebel зеркальный шкаф со светом Лотос"
        :price="5990"
        :oldPrice="6499"
        :discount="15"
      />
      <TheItem
        img="/fourth/2.png"
        title="O-mebel зеркальный шкаф со светом Лотос"
        :price="5990"
      />
      <TheItem
        img="/fourth/3.png"
        title="O-mebel зеркальный шкаф со светом Лотос"
        :price="5990"
      />
      <TheItem
        img="/fourth/4.png"
        title="O-mebel зеркальный шкаф со светом Лотос"
        :price="5990"
        :oldPrice="6499"
        :discount="12"
      />
    </div>
  </div>
</template>
<style></style>
