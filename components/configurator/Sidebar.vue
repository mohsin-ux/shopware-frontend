<script setup lang="ts">
import SideBarMenu from "./SideBarMenu.vue";
const isShowMenu = ref<boolean>(false);
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
let currentOption = ref<string>(products[1]);
function toggleShowMenu() {
  isShowMenu.value = !isShowMenu.value;
  console.log(isShowMenu.value);
}
function setCurrentOption(index: number) {
  currentOption.value = products[index + 1];
}
</script>

<template>
  <div class="bg-[#EEEDE8] sm:flex sm:flex-col sm:justify-between -mt-4 sm:w-[275px] sticky bottom-0 box-border">
    <SideBarMenu
      :products="products"
      :isShowMenu="isShowMenu"
      @showMenu="toggleShowMenu"
      @currentOption="setCurrentOption"
    />

    <div class="w-full sm:p-4">
      <div
        class="w-full py-3 sm:p-2 sm:bg-white flex flex-col gap-2 justify-center items-center max-sm:rounded-t-2xl"
        :class="{ 'bg-white': isShowMenu }"
      >
        <div
          class="p-2 w-full flex justify-center sm:hidden"
          @click="toggleShowMenu"
          :class="{ 'bg-green hidden': isShowMenu }"
        >
          <span class="w-10 h-1 bg-black rounded"></span>
        </div>
        <p class="text-sm font-medium">
          Aktuelle Konfiguration: <span class="font-bold">€</span>
          <span class="text-lg font-bold">404,88</span>
        </p>
      </div>
      <button
        class="bg-[#404853] w-full p-5 sm:p-2 text-white text-base font-medium"
      >
        Weiter mit {{ currentOption }}
      </button>
    </div>
  </div>
</template>
