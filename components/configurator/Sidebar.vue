<script setup lang="ts">
import SideBarMenu from "./SideBarMenu.vue";
const props = defineProps<{
  groupLabels: string[];
  selectedGroupLabel: string;
}>()
const emits =defineEmits<{
  (e: 'currentGroupLabel', index: number, currentGroupLabel: string ): void
}>()



const isMenuVisible = ref<boolean>(false);
let currentOption = ref<string>(props.groupLabels[1]);
function toggleMenuVisible() {
  isMenuVisible.value = !isMenuVisible.value;
}
function setCurrentOption(index: number, currentGroupLabel: string) {
  currentOption.value = props.groupLabels[index + 1];
  emits('currentGroupLabel', index, currentGroupLabel)
}

</script>

<template>
  <div
    class="bg-[#EEEDE8] sm:flex sm:flex-col sm:justify-between -mt-4 sm:w-[340px] sticky bottom-0 box-border"
  >
    <SideBarMenu
      :groupLabels="groupLabels"
      :isMenuVisible="isMenuVisible"
      :selectedGroupLabel="selectedGroupLabel"
      @showMenu="toggleMenuVisible"
      @currentOption="setCurrentOption"
    />

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
        Weiter mit {{ currentOption }}
      </button>

    </div>
  </div>
</template>
