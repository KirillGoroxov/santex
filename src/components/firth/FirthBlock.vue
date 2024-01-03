<script setup>
import TheItem from './TheItem.vue';
</script>
<template>
  <div class="text-black">
    <h2 class="text-[#151716] text-[32px] mx-auto text-center mt-20">
      Наши преимущества
    </h2>
    <div
      class="flex mx-auto lg:w-[959px] mt-[54px] gap-y-5 md:gap-0 justify-start md:justify-between items-center md:items-start flex-col md:flex-row"
    >
      <TheItem
        image="/firth/2.svg"
        :widthImage="70"
        title="Бесплатный возврат"
        description="Если товар вам не подходит, вы можете верунть его в течении 30 дней."
      />
      <TheItem
        image="/firth/1.svg"
        :widthImage="60"
        title="Гарантия 5 лет"
        description="Стандарты ISO9001 и двойной контроль качества гарантируют долгосрочную безупречную работу изделий."
      />
      <TheItem
        image="/firth/3.svg"
        :widthImage="55"
        title="Безопасная оплата"
        description="Банковской картой или наличными при получении."
      />
    </div>
  </div>
</template>
