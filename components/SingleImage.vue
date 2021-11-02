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
    :style="{ backgroundImage: `url(${url}` }"
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
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;;
}
.fa {
  position: absolute;
  top: .2em;
  left: .2em;
  cursor: pointer;
}

img {
  position: absolute;
  top: 0;
  left: 0;
}
</style>