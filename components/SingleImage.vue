<script setup>
const props = defineProps({
  url: String
})

const emit = defineEmits(['close'])

</script>

<script>
/*
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    closeMe() {
      console.log('closeMe', window.jQuery, process.server, process.browser)
      this.$emit('close')
    }
  },
})
*/
export default {
  methods: {
    closeMe() {
      console.log('closeMe', window.jQuery, process.server, process.browser)
      this.$emit('close')
    }
  },
}

</script>

<template>
  <div
    v-if="url"
    class="single-image"
    :style="{ backgroundImage: `url(${url}), linear-gradient(to right, white, white)` }"
  >
    <i
      aria-hidden="true"
      class="fa fa-times fa-2x"
      @click="closeMe"
    />
  </div>
</template>


<style scoped>
@import 'https://use.fontawesome.com/releases/v5.15.4/css/all.css';

.single-image {
  width: 300px;
  height: 300px;
  position: fixed;
  top: 150px;
  left: calc(50% - 150px);
  /* two backgrounds - image itself and white background */
  background-size: contain, contain;
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  /* below styles taken from https://v3.vuejs.org/guide/optimizations.html#virtual-dom */
  box-shadow: -5px 18px 40px -12px rgba(0, 0, 0, 0.4);
  transform: perspective(800px) rotateY(30deg) rotateX(15deg) rotate(-2deg) scaleX(0.95);
}
.fa {
  position: absolute;
  top: .2em;
  left: .2em;
  cursor: pointer;
}
</style>