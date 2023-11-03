<!--
<script setup lang="ts">
  const auth = useAuthStore()

  const userList = await $fetch('/api/user', {
    query: {
      scope: 'all',
    },
  })
</script>

<template>
  <div>Edit users</div>

  <ul>
    <li v-for="user in userList" :key="user.uid">
      {{ user.name }} - {{ user.email }}
    </li>
  </ul>

  <ul>
    <li v-for="user in userList" :key="user.uid">
      <userCMSlist
        :content="{
          name: user.name,
          mail: user.email,
        }"
      ></userCMSlist>
    </li>
  </ul>
-->
<!--if Admin
        get user data
      -->
<!--place user data in list-->
<!--</template>-->
