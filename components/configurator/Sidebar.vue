<script setup lang="ts">
import SideBarMenu from "./SideBarMenu.vue";
const {nextGroupLabel, selectedGroupIndex, groupLabels }: any = inject("sideBar");
// const props = defineProps<{ nextGroupLabel: string }>();
// const emits = defineEmits<{}>();
// const nextGroupLabel = ref<string>(groupLabels.value[1]);
const isMenuVisible = ref<boolean>(false);
function toggleMenuVisible() {
  isMenuVisible.value = !isMenuVisible.value;
}
// function setNextGroupLabel() {
//   console.log(selectedGroupIndex.value)
//   nextGroupLabel.value = groupLabels.value[selectedGroupIndex.value + 1];
// }
</script>

<template>
  <div
    class="bg-[#EEEDE8] sm:flex sm:flex-col sm:justify-between -mt-4 sm:w-[340px] sticky bottom-0 box-border"
  >
    <SideBarMenu
      :isMenuVisible="isMenuVisible"
      @show-menu="toggleMenuVisible"
    />
    <!-- @nextGroup="setNextGroupLabel" -->

    <div class="w-full sm:p-4">
      <div
        class="w-full py-3 sm:p-2 sm:bg-white flex flex-col gap-2 justify-center items-center max-sm:rounded-t-2xl"
        :class="{ 'bg-white': isMenuVisible }"
      >
        <div
          class="p-2 w-full flex justify-center sm:hidden"
          @click="toggleMenuVisible"
          :class="{ hidden: isMenuVisible }"
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
        Weiter mit {{ nextGroupLabel }}
      </button>
    </div>
  </div>
</template>
