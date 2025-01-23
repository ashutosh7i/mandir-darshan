import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDataStore = defineStore('data', () => {
  const data = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const isInitialized = ref(false);

  const fetchData = async () => {
    if (isInitialized.value && data.value.length > 0) return;
    
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch('http://localhost:5000/api/temples');
      const result = await response.json();
      data.value = result;
      isInitialized.value = true;
    } catch (err) {
      error.value = 'Failed to fetch data.';
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, error, fetchData, isInitialized };
});
