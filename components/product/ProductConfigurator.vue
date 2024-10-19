<script setup lang="ts">
import { useConfigData } from "~/composables/configurator/configData";
let indexOfCurrentProfile = ref<number>(0);
let indexOfCurrentGroup = ref<number>(1);
const { allProfilesLabels, groupLabels, optionLabels } = await useConfigData(
  indexOfCurrentProfile,
  indexOfCurrentGroup
);

let selectedGroupLabel = ref<string>("Produktlinie");

function setCurrentProfile(index: number, label: string) {
  indexOfCurrentProfile.value = index;
}
function setCurrentGroup(index: number, currentGroupLabel: string) {
  indexOfCurrentGroup.value = index;
  selectedGroupLabel.value = currentGroupLabel;
}
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
      <ConfiguratorUserInput />
      <ConfiguratorProfileMenu
        :allProfilesLabels="allProfilesLabels"
        @current-Profile="setCurrentProfile"
      />
      <!-- <ConfiguratorOptionsMenu :optionLabels="optionLabels" /> -->
      <!-- <ConfiguratorPriceMenu /> -->
      <!-- <ConfiguratorReview /> -->
    </div>

    <ConfiguratorSidebar
      :groupLabels="groupLabels"
      :selectedGroupLabel="selectedGroupLabel"
      @current-group-label="setCurrentGroup"
    />
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
