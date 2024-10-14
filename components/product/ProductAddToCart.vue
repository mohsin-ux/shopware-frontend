<script setup lang="ts">

import { Product } from "@shopware-pwa/types";

const { pushSuccess } = useNotifications();
const props = defineProps<{
  product: Product;
}>();
const { product } = toRefs(props);
const { codeErrorsNotification } = useCartNotification();
const { addToCart, quantity } = useAddToCart(product);

const addToCartProxy = async () => {
  await addToCart();
  codeErrorsNotification();
  pushSuccess(`${props.product?.translated?.name} has been added to cart.`);
};

const loading = ref(true);
onMounted(() => {
  loading.value = false;
});
function increment (){
  quantity.value++ 
}
function decrement (){
  quantity.value--
}
const kitchenzModalController = useModal()
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-1/3">
      <div
        class="border py-2 px-4 mt-4 border-solid border-1 border-black flex justify-between"
      >
        <button @click="decrement" class="px-2 bg-white">-</button>

        <input
          id="qty"
          v-model="quantity"
          type="number"
          :min="1"
          :max="product.calculatedMaxPurchase"
          :step="product.purchaseSteps || 1"
          data-testid="product-quantity"
          class="text-center outline-none"
        />
        <button @click="increment" class="px-2 bg-white">+</button>
      </div>
    </div>
    <div class="basis-3/4 ml-4">
      <button
        class="py-2 px-6 mt-4 bg-sky-950 text-[#ffffff] border border-transparent flex items-center justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        data-testid="add-to-cart-button"
        :disabled="loading"
        @click.prevent="kitchenzModalController.open"
      >
        {{ $t("product.addToCart") }}
      </button>
      <SharedModal :controller="kitchenzModalController">
        <ProductConfigurator @success="kitchenzModalController.close"/>
      </SharedModal>
    </div>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
