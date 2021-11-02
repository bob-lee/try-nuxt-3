<script setup>
import { ref } from 'vue'
// import SingleImage from '~~/components/SingleImage.vue'
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
const imageToShow = ref('')
const name = ref('Bob')
// const urls

console.log('hello:', hi.value)
console.log('urls:', count.value)
// console.log('my:', my.value)

function urlClicked(url) {
  console.log('urlClicked', url)
  imageToShow.value = url
}
</script>

<template>
  <div>
    <h1>Home {{ data }}</h1>
    <p>hello api: {{ hi + ' ' + name }}</p>
    <pre>urls api: {{ urls[0] }}, {{ count }}</pre>
    <div v-for="url in urls" :key="url.url">
      <div @click="urlClicked(url.url)"> {{ url.fileName }}</div>
    </div>
    <input type="text" v-model="name">
    <SingleImage :url="imageToShow" @close="imageToShow = ''" />
  </div>
</template>

<style>

</style>