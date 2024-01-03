<script setup>
import FirstItem from './FirstItem.vue';
</script>
<template>
  <div class="w-full bg-[#F6F6F6] px-5">
    <div
      class="flex xl:w-[1200px] mx-auto justify-between pt-10 xl:pt-20 flex-col md:flex-row"
    >
      <div class="xl:w-[649px] text-2xl mb-10 lg:text-[18px] text-black">
        <div class="">
          <div class="text-justify">
            <p class="text-[#FE5B00] inline">
              <img
                src="/first/О.svg"
                class="float-left mr-2 h-11 mt-2"
                alt="О"
              />range
            </p>
            – немецкая торговая марка. Главный офис и основное производство
            расположены в Германии. Производим смесители, душевые кабины, ванны
            и мебель для ванных комнат.
          </div>
        </div>
        <div class="mt-6 text-justify">
          Мы предлагаем качественную продукцию немецкого производства, которая
          полностью адаптирована к реалиям российскиого рынка.
        </div>
      </div>
      <div class="flex flex-col gap-[30px] ml-4 xl:ml-0">
        <FirstItem
          image="/first/line.svg"
          title="Cобственное производство"
          text="Выский уровнень технологий позволяет гарантировать качество продукции на протяжении 10 лет"
        />
        <FirstItem
          image="/first/apple.svg"
          title="Экологичность и доступность"
          text="Уникальный состав сплава делает продукцию Orange безопасной для потребителя"
        />
      </div>
    </div>
  </div>
</template>
