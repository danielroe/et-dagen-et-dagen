<script setup lang="ts">
  // import VBtn from './components/Button.vue'
  // Your TS here
  const name = 'Reidar Arne'
  const age = 22
</script>

<template>
  <div>
    <h1>Your content here</h1>
    <h2>More content</h2>
    <VBtn icon="mdi-translate-outline"></VBtn>

    <h3>{{ name }} is {{ age }} years old</h3>
    <VBtn></VBtn>
    <Button></Button>
    <LangSwitcher></LangSwitcher>
  </div>
</template>

<style></style>
