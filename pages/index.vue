<script setup>
import { ref } from 'vue'

const { data } = await useAsyncData(
  'hello', 
  () => $fetch('/api/hello')
)
const { data: images } = await useFetch('/api/images/portrait',
  // { pick: [ 'fileName', 'url' ] }
)

const hi = computed(() => data.value + '!')
const count = computed(() => (images.value && Array.isArray(images.value)) ? images.value.length : 0)
const imageToShow = ref('')
const name = ref('Bob')

console.log('hello:', hi.value)
console.log('urls:', count.value)

watchEffect(() => console.log('watchEffect:', imageToShow.value))
watch(imageToShow, (url, prevUrl) => console.log('watch', prevUrl || 'na', '->',  url || 'na'))

function urlClicked(url) {
  imageToShow.value = url
}
</script>

<template>
  <div>
    <h1>Home {{ data }}</h1>

    <p>hello api: {{ hi + ' ' + name }}</p>

    <pre>images api: {{ images[0] }}, {{ count }}</pre>

    <div v-for="image in images" :key="image.url">
      <div @click="urlClicked(image.url)"> {{ image.fileName }}</div>
    </div>

    <br>

    <input type="text" v-model="name">

    <SingleImage :url="imageToShow" @close="imageToShow = ''" />
  </div>
</template>

<style>

</style>