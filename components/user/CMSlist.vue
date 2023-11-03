<!--
<script setup lang="ts">
  // inputs
  export interface userInformation {
    name: string
    mail: string
    userType: string
  }

  const company = defineProps({
    content: {
      type: Object as PropType<userInformation>,
      required: true,
    },
  })

  if (company.content.name === undefined) {
    company.content.name = 'N.A.'
  }
</script>

<template>
  <VCard width="1000" :title="content.name">
    <VRow></VRow>
  </VCard>
</template>
-->
