<script setup>
defineProps({
  title: String,
  img: String,
  price: Number,
  oldPrice: {
    type: Number,
    required: false,
  },
  discount: {
    type: Number,
    required: false,
  },
});
</script>
<template>
  <div
    class="border-[1px] relative text-[#151716] border-[#ECECEC] w-[300px] h-[354px] pl-5"
  >
    <img class="mt-[24px] mb-[20px]" :src="img" alt="" />
    <div
      v-if="oldPrice"
      class="absolute bg-[#FF7028] rounded-sm top-3 right-3 text-white w-[60px] h-9 text-base flex items-center justify-center"
    >
      -{{ discount }}%
    </div>
    <h4 class="text-[16px] w-[260px] mb-5">{{ title }}</h4>
    <div class="flex items-center">
      <p class="text-[20px] mr-3">{{ price }} ₽</p>
      <p
        v-if="oldPrice"
        class="text-[16px] line-through decoration-1 text-gray-400"
      >
        {{ oldPrice }} ₽
      </p>
    </div>
  </div>
</template>
