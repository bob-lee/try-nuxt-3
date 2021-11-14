<script setup>
import { ref, reactive } from 'vue'

const INITIAL_NUMBERS = [0, 1, 2, 3, 4]
const INITIAL_ITEMS = [
  {
    id: 0,
    name: 'first item'
  }
]

const { data } = await useAsyncData(
  'hello', 
  () => $fetch('/api/hello')
)
const { data: images } = await useFetch('/api/images/portrait',
  // { pick: [ 'fileName', 'url' ] }
)

const hi = computed(() => data.value + '!')
const countImages = computed(() => (images.value && Array.isArray(images.value)) ? images.value.length : 0)
const imageToShow = ref('')
const name = ref('Bob')
const numbers = reactive(INITIAL_NUMBERS)
const items = reactive(INITIAL_ITEMS)

// watchEffect(() => console.table('watchEffect numbers', numbers))
const countNumbers = ref(INITIAL_NUMBERS.length)
const numbersString = ref(INITIAL_NUMBERS.toString())
watch(
  numbers, 
  (numbers) => {
    console.log('watch numbers', numbers)
    countNumbers.value = numbers.length
    numbersString.value = numbers.toString()
  }
)

const countItems = ref(INITIAL_ITEMS.length)
const firstName = ref(INITIAL_ITEMS[0].name)
watch(
  items, 
  (items) => {
    console.log('watch items', items)
    countItems.value = items.length
    firstName.value = items[0].name
  }
)

console.log('hello:', hi.value)
console.log('images:', countImages.value)

watchEffect(() => console.log('imageToShow:', imageToShow.value))
watch(
  imageToShow, 
  (url, prevUrl) => console.log('watch', prevUrl || 'na', '->',  url || 'na')
)

function urlClicked(url) {
  imageToShow.value = url
}

function addNumber() {
  numbers.push(numbers.length)
}

function addItem() {
  items.push({
    id: items.length,
    name: `I am item[${items.length}]`
  })
}

function editItem() {
  const item = items[0]
  item.name += '!'
}
</script>

<template>
  <div>
    <h1>Home {{ data }}</h1>

    <p>hello api: {{ hi + ' ' + name }}</p>
    <input type="text" v-model="name">

    <pre>images api: {{ images[0] }}, {{ countImages }}, {{imageToShow || 'na' }}</pre>

    <pre>watching numbers: {{countNumbers }}, [{{ numbersString }}]</pre>
    <pre>watching items: {{countItems }}, [{{ firstName }}]</pre>
    <button type="button" @click="addNumber">Add number</button>
    <button type="button" @click="addItem">Add item</button>
    <button type="button" @click="editItem">Edit item</button>

    <div v-for="image in images" :key="image.url">
      <div @click="urlClicked(image.url)"> {{ image.fileName }}</div>
    </div>

    <br>


    <SingleImage :url="imageToShow" @close="imageToShow = ''" />
  </div>
</template>

<style>

</style>