<template>
  <div>
    <h1>Home {{ data }}</h1>
    <p>hello api: {{ hi + ' ' + name }}</p>
    <pre>urls api: {{ urls[0] }}, {{ count }}</pre>
    <div v-for="url in urls" :key="url.url">
      <div> {{ url.fileName }}</div>
    </div>
    <input type="text" v-model="name">
  </div>
</template>

<script setup>
import { ref } from 'vue'
const { data } = await useAsyncData(
  'hello', 
  () => $fetch('/api/hello')
)
const { data: urls } = await useFetch('/api/images/portrait',
  // { pick: [ 'fileName', 'url' ] }
)
// const { data: my } = await useFetch('/api/images/portrait')
// const urls = JSON.parse(urls0)

const hi = computed(() => data.value + '!')
const count = computed(() => (urls.value && Array.isArray(urls.value)) ? urls.value.length : 0)
const name = ref('Bob')
// const urls

console.log('hello:', hi.value)
console.log('urls:', count.value)
// console.log('my:', my.value)

</script>

<style>

</style>