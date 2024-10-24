<script setup lang="ts">
const props = defineProps<{
  isMenuVisible: boolean;
}>();
const emit = defineEmits<{
  (e: "showMenu"): void;
  // (e: "nextGroup"): void;
}>();

const { selectedGroupIndex, groupLabels, setCurrentGroup }: any =
  inject("sideBar");

function selectedGroup(index: number, groupLabel: string) {
  setCurrentGroup(index, groupLabel);
  emit("showMenu");
  // emit("nextGroup");
}
</script>

<template>
  <div
    class="max-sm:rounded-lg w-full bg-kitchenz relative transition-all p-4"
    :class="{ 'hidden sm:block': !isMenuVisible }"
  >
    <div
      class="flex justify-center max-sm:py-2 py-2"
      @click="$emit('showMenu')"
    >
      <span class="w-10 h-1 bg-black rounded items-center sm:hidden"></span>
    </div>

    <div
      v-for="(groupLabel, index) in groupLabels"
      class="py-2 border-b border-[#DEDAD4] flex items-center cursor-pointer"
    >
      <span
        class="w-3 h-3 rotate-45 absolute -left-1.5 bg-white"
        :class="{ hidden: index !== selectedGroupIndex }"
      ></span>
      <div
        @click="selectedGroup(index, groupLabel)"
        class="w-full bg-none text-start flex items-center"
        :class="{ 'font-bold': index === selectedGroupIndex }"
      >
        <p class="w-7">{{ index + 1 }}.</p>
        <p class="w-24 hyphens-auto break-words" lang="de">{{ groupLabel }}</p>
        <!-- <p class="text-red" v-if="index === selected">
          {{ selectedGroupLabel }}
        </p> -->
      </div>
    </div>
  </div>
</template>
