<script setup lang="ts">
defineProps<{
  isShowMenu: boolean;
}>();
// const isShowMenu = toRef('isShowMenu')
const products = [
  "Produktlinie",
  "Front",
  "Korpus",
  "Glastür",
  "Glasart",
  "Griff",
  "Griffposition",
  "Türanschlag",
  "Auszug",
  "Fußhöhe",
  "Optionale Ausstattung",
  "Maße",
];
</script>

<template>
  <div class="p-5 max-sm:rounded-t-3xl w-full pb-12 bg-kitchenz sm:w-72 sm:block" :class="{ 'hidden': !isShowMenu }">
    <div class="flex justify-center max-sm:py-2" @click="$emit('showMenu')">
      <span class="w-10 h-1 bg-black rounded items-center sm:hidden"></span>
    </div>

    <div
      v-for="(product, index) in products"
      class="py-2 border-b border-[#DEDAD4]"
    >
      <button class="text-grey_text text-sm">{{ index + 1 }}. {{ product }}</button>
    </div>
  </div>
</template>
