<script setup lang="ts">
  const localePath = useLocalePath()
</script>

<template>
  <div class="d-flex h-screen mt-10 justify-center">
    <VSheet class="text-center">
      <h1 class="text-h1 pb-9">404</h1>
      <h5 class="text-h5 py-3 break-text">
        Denne siden finnes ikke: /{{ $route.params.slug[0] }}
      </h5>
      <VBtn @click="navigateTo(localePath('/'))">Tilbake til forsiden</VBtn>
    </VSheet>
  </div>
</template>

<style scoped>
  .break-text {
    max-width: 90vw;
    word-wrap: break-word;
  }
</style>
