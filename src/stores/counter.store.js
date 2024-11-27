import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const count = ref(0);
  const doubleCount = computed(() => count.value * 2)

  const isVisibleResult = ref(false);

  const increment = () => {
    console.log('increment');
    count.value++;
    if (count.value <= 0) {
      isVisibleResult.value = false;
    } else {
      if (isVisibleResult.value !== true) {
        isVisibleResult.value = true;
      }
    }
  }

  const reset = () => {
    count.value = 0;
    isVisibleResult.value = false;
  }

  return { count, doubleCount, isVisibleResult, increment, reset }
})
