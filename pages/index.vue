<template>
  <h1>Home {{ data }}</h1>
</template>

<script setup>
const { data } = await useAsyncData('hello', () => $fetch('/api/hello'))
</script>

<style>

</style>