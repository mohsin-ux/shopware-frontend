<template>
  <div class="flex flex-wrap justify-center gap-3 overflow-y-auto">
    <div
      v-for="cards in 14"
      class="w-[204px] border flex justify-center mt-2 relative"
    >
      <img src="~/assets/images/product-line-selection.jpg" alt="" />
      <!-- <div class="w-8 h-8 bg-white rounded-full absolute right-1 top-1">
        <IconsSearchRed class="absolute top-2 right-2" />
      </div> -->
      <!-- <p class="absolute bottom-1 left-2 text-white">Art Wood (A19)</p> -->
    </div>
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
} 
</style>
