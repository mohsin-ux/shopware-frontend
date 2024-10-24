<script setup lang="ts">
defineProps<{
  optionLabels: string[];
}>();
</script>

<template>
  <div
    class="flex flex-wrap justify-center gap-3 overflow-y-auto sm:w-[660px]"
  >
    <div
      v-for="label in optionLabels"
      class="w-[204px] h-[204px] border flex flex-col items-center gap-2 py-3 px-2 mt-2 relative hover:border-red hover:border-4 hover:p-1 transition-all"
    >
      <img
        class="object-cover w-[140px] h-[140px]"
        src="~/assets/images/mainPic.jpg"
        alt="something goes wrong"
      />
      <div
        class="w-8 h-8 bg-white rounded-full absolute right-1 top-1 shadow-[0_1px_1px_0px_rgba(0,0,0,0.25)]"
      >
        <IconsSearchRed class="absolute top-2 right-2" />
      </div>
      <p class="text-black font-bold">
        {{ label }}
      </p>
    </div>
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
