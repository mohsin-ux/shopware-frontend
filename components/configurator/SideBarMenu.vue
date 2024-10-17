<script setup lang="ts">
defineProps<{
  isShowMenu: boolean;
  products: string[];
}>();
const emit = defineEmits<{
  (e: "showMenu"): void;
  (e: "currentOption", index: number): void;
}>();
// const isShowMenu = toRef('isShowMenu')

let selected = ref<number>(0);

function selectedOption(index: number) {
  emit("currentOption", index);
  selected.value = index;
}
</script>

<template>
  <div
    class="p-5 max-sm:rounded-lg w-full bg-kitchenz sm:w-72 relative transition-all"
    :class="{ 'hidden sm:block': !isShowMenu }"
  >
    <div class="flex justify-center max-sm:py-2 py-2" @click="$emit('showMenu')">
      <span class="w-10 h-1 bg-black rounded items-center sm:hidden"></span>
    </div>

    <div
      v-for="(product, index) in products"
      class="py-2 border-b border-[#DEDAD4] flex items-center cursor-pointer"
      :class="{ 'font-bold': index === selected }"
    >
      <span
        class="w-3 h-3 rotate-45 absolute -left-1.5 bg-white"
        :class="{ 'hidden': index !== selected }"
      ></span>
      <p @click="selectedOption(index)" class="w-full bg-none text-start">{{ product }}</p>
    </div>
  </div>
</template>
