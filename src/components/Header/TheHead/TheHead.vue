<script>
import Burger from './Burger.vue';
import MobileLoupe from './MobileLoupe.vue';

export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  components: { MobileLoupe, Burger },
};
</script>

<template>
  <div
    class="w-[95%] pt-[30px] flex items-center justify-between mx-auto 2xl:w-[1300px]"
  >
    <div class="flex items-center text-[18px] flex-col md:flex-row w-full">
      <div class="flex w-full md:w-auto justify-between">
        <img src="/header/logo.svg" alt="LOGO" />
        <div v-if="windowWidth < 768" class="flex">
          <MobileLoupe class="mr-3" />
          <Burger />
        </div>
      </div>
      <p class="ml-[26px] my-5 md:my-0 text-center">
        Разработано в Германии. Сделано в России.
      </p>
    </div>
    <div v-if="windowWidth > 768" class="flex items-center">
      <img src="/header/Phone.svg" alt="phone" />
      <p class="text-[#999] text-4 ml-2 w-[154px]">+7 (905) 543 23 45</p>
      <div
        class="w-11 h-10 border-2 border-grafit rounded-[2px] flex items-center justify-center ml-8"
      >
        <img src="/header/Loupe.svg" alt="loupe" />
      </div>
    </div>
  </div>
</template>
