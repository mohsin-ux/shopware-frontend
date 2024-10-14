<script setup lang="ts"></script>

<template>
  <div
    class="sm:flex sm:max-w-5xl h-screen sm:max-h-[672px] bg-white relative overflow-auto"
  >
    <div class="px-6 pt-6 flex flex-col gap-3">
      <h1 class="text-2xl font-bold bg-white">
        1 <span class="text-base font-normal">/12</span> Produktlinie wählen
      </h1>
      <ConfiguratorUserInput />
      <!-- <ConfiguratorImageMenu /> -->
      <!-- <ConfiguratorPriceMenu />    -->
       <ConfiguratorReview/>
    </div>

    <ConfiguratorSidebar />
  </div>
</template>
<style scoped></style>
