<script setup>
import TheItem from './TheItem.vue';
</script>
<template>
  <div class="bg-[#202122]">
    <div
      class="w-[70%] lg:w-[1000px] xl:w-[1200px] mx-auto flex flex-col gap-3 sm:flex-row sm:justify-between flex-wrap"
    >
      <div class="w-full my-7 xl:ml-0">
        <img src="/header/logo.svg" alt="" class="w-[200px]" />
      </div>
      <div class="">
        <TheItem title="О компании" />
        <TheItem title="Сотрудничество" />
        <TheItem title="Покупателям" />
      </div>
      <div class="mt-3 sm:mt-0">
        <TheItem title="Где купить" />
        <TheItem title="Сервисное обслуживание" />
        <TheItem title="Контакты" />
      </div>
      <div class="">
        <h5 class="mb-5">Есть вопросы?</h5>
        <div class="flex text=[#BEBEBE] mb-[22px]">
          <img src="/footer/mail.svg" alt="" />
          <p class="text-[#BEBEBE] ml-2">hello@orangemixers.ru</p>
        </div>
        <div class="flex">
          <img src="/footer/iphone.svg" alt="" />
          <p class="text-[#BEBEBE] ml-2">+7 (495) 543 23 45</p>
        </div>
      </div>
      <div class="mt-5 sm:mt-0 w-[200px]">
        <h5 class="mb-3">Мы в соцсетях</h5>
        <img src="/footer/groupe.svg" alt="" />
      </div>
    </div>
    <div
      class="h-[100px] border-t-[1px] border-[#484848] flex items-center justify-center mt-20"
    >
      <img src="/footer/vector.svg" alt="" />
    </div>
  </div>
</template>
