<script setup lang="ts">
const props = defineProps<{
  isMenuVisible: boolean;
  groupLabels: string[];
  selectedGroupLabel: string;
}>();
const emit = defineEmits<{
  (e: "showMenu"): void;
  (e: "currentOption", index: number, groupLabel: string): void;
}>();
// const isShowMenu = toRef('isShowMenu')

let selected = ref<number>(0);

function selectedOption(index: number, groupLabel: string) {
  emit("currentOption", index, groupLabel);
  emit("showMenu");
  selected.value = index; 
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
      :class="{ 'font-bold': index === selected }"
    >
      <span
        class="w-3 h-3 rotate-45 absolute -left-1.5 bg-white"
        :class="{ hidden: index !== selected }"
      ></span>
      <div
        @click="selectedOption(index, groupLabel)"
        class="w-full bg-none text-start flex items-center"
      >
        <p class="w-[28px]">{{ index + 1 }}.</p>
        <p class="w-[100px]">{{ groupLabel }}</p>
        <p>{{ selectedGroupLabel }}</p>
      </div>
    </div>
  </div>
</template>
