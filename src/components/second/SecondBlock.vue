<script setup>
import SecondItem from './SecondItem.vue';
</script>
<template>
  <div class="my-10 w-[92%] 2xl:w-[1205px] mx-auto text-center sm:text-left">
    <h2 class="text-4xl mb-4 text-[#151716]">Наша продукция</h2>
    <div
      class="flex justify-center sm:justify-between flex-wrap md:w-[600px] xl:w-auto"
    >
      <SecondItem image="/second/1.jpg" title="Смесители" />
      <SecondItem image="/second/2.jpg" title="Мебель" />
      <SecondItem image="/second/3.jpg" title="Душевая программа" />
      <SecondItem image="/second/4.jpg" title="Фаянс" />
    </div>
  </div>
</template>
<style></style>
