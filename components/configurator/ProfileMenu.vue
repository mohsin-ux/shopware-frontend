<script setup lang="ts">
defineProps<{
  allProfilesLabels: string[];
}>();
const emit = defineEmits<{
  (e: "currentProfile", text: number, label: string): void;
}>();
function setCurrentProfile(index: number, label: string) {
  emit("currentProfile", index, label);
}
</script>

<template>
  <div class="flex flex-wrap justify-center gap-3 overflow-y-auto sm:w-[660px]">
    <div
      v-for="(label, index) in allProfilesLabels"
      class="w-[204px] h-[204px] border flex justify-center mt-2 relative hover:border-red hover:border-4 hover:p-1 transition-all"
      @click="setCurrentProfile(index, label)"
    >
      <img
        class="object-cover"
        src="~/assets/images/mainPic.jpg"
        alt="something goes wrong"
      />
      <div class="w-8 h-8 bg-white rounded-full absolute right-2 top-2">
        <IconsSearchRed class="absolute top-2 right-2" />
      </div>
      <p class="absolute bottom-1 left-2 text-white">
        {{ label }}
      </p>
    </div>
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
