<script setup lang="ts">
import { useConfigData } from "~/composables/configurator/configData";
let currentProfileIndex = ref<number>(0);
let currentGroupIndex = ref<number>(1);
const { allProfilesLabels, groupLabels, optionLabels } = await useConfigData(
  currentProfileIndex,
  currentGroupIndex
);

const selectedGroupLabel = ref<string>(groupLabels.value[0]);
const isOptionsMenuVisible = ref<boolean>(false);
let selectedGroupIndex = ref<number>(0);
const nextGroupLabel = ref<string>(groupLabels.value[1]);

function setCurrentProfile(index: number, label: string) {
  currentProfileIndex.value = index;
  isOptionsMenuVisible.value = isOptionsMenuVisible.value ? false : true;
  // const nextGroupIndex = selectedGroupIndex.value++;
  setSelectedGroupLabel(selectedGroupIndex.value + 1);
  setSelectedGroupIndex(selectedGroupIndex.value + 1);
  // selectedGroupLabel.value = groupLabels.value[selectedGroupIndex.value];
  setNextGroupLabel(selectedGroupIndex.value);
}

function setCurrentGroup(index: number, currentGroupLabel: string) {
  currentGroupIndex.value = index;
  selectedGroupIndex.value = index;
  setSelectedGroupLabel(index);
  setNextGroupLabel(selectedGroupIndex.value);
  setSelectedGroupIndex(index);
  togglesOptionsMenuVisible(currentGroupLabel);
}

function setSelectedGroupLabel(selectedGroupIndex: number) {
  selectedGroupLabel.value = groupLabels.value[selectedGroupIndex];
}
function setSelectedGroupIndex(groupIndex: number) {
  selectedGroupIndex.value = groupIndex;
}
function setNextGroupLabel(selectedGroupIndex: number) {
  nextGroupLabel.value = groupLabels.value[selectedGroupIndex + 1];
}
function togglesOptionsMenuVisible(currentGroupLabel: string) {
  currentGroupLabel !== "Produktlinie"
    ? (isOptionsMenuVisible.value = true)
    : (isOptionsMenuVisible.value = false);
}
provide("sideBar", {
  nextGroupLabel,
  selectedGroupIndex,
  groupLabels,
  setCurrentGroup,
});
</script>

<template>
  <div
    class="sm:flex h-screen sm:max-h-[672px] relative overflow-y-auto overflow-x-hidden"
  >
    <div class="p-6 pb-0 flex flex-col gap-3">
      <h1 class="text-2xl font-bold">
        1 <span class="text-base font-normal">/12</span>
        {{ selectedGroupLabel }} wählen
      </h1>
      <ConfiguratorSearch />
      <ConfiguratorProfileMenu
        v-if="isOptionsMenuVisible === false"
        :allProfilesLabels="allProfilesLabels"
        @current-Profile="setCurrentProfile"
      />
      <!-- :nextGroupLabel="nextGroupLabel" -->
      <ConfiguratorOptionsMenu
        v-if="isOptionsMenuVisible === true"
        :optionLabels="optionLabels"
      />
      <!-- <ConfiguratorPriceMenu /> -->
      <!-- <ConfiguratorReview /> -->
    </div>

    <ConfiguratorSidebar />
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
