<script setup lang="ts">
// import { useConfigurator } from "composables/useConfigurator";
const { parsedData } = await useConfigurator();
// console.log(parsedData)
// const profil = parsedData.map(single => single.profil)
// const price = parsedData.map(single => single.price)
// console.log(price)
// console.log(profil)
const allProfilesMetaData = parsedData.map(
  (profileData) => profileData.groups[0]
);
console.log(` the groups of the data${allProfilesMetaData}`);
const allProfilesLabel = allProfilesMetaData.map(
  (profileData) => profileData.options[0].label
);
console.log(allProfilesLabel);
const allProfilesImage = allProfilesMetaData.map(
  (profileData) => profileData.options[0].configMedia
);
console.log(allProfilesImage)

// const allData = parsedData.map(data => data.groups).filter((subData, index) => index)
// console.log(allData)
</script>

<template>
  <div
    class="sm:flex sm:max-w-[970px] h-screen sm:max-h-[672px] relative overflow-y-auto overflow-x-hidden"
  >
    <div class="p-6 pb-0 flex flex-col gap-3">
      <h1 class="text-2xl font-bold">
        1 <span class="text-base font-normal">/12</span> Produktlinie wählen
      </h1>
      <ConfiguratorUserInput />
      <ConfiguratorImageMenu
        :allProfilesLabel="allProfilesLabel"
      />
      <!-- <ConfiguratorPriceMenu /> -->
      <!-- <ConfiguratorReview/> -->
    </div>

    <ConfiguratorSidebar />
  </div>
</template>
<style scoped></style>
