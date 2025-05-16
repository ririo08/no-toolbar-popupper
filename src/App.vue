<script setup lang="ts">
import { ref } from 'vue'

const url = ref<string>('')
const openUrl = (url: string) => {
  const createdUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`
  window.open(
    createdUrl,
    'window',
    'scrollbars=yes,status=no,toolbar=no,location=no,menubar=no,directories=no,resizable=yes',
  )
}
</script>

<template>
  <div class="wrapper">
    <p class="title">No Toolbox Pop Upper</p>
    <div class="description">
      <input class="url-input" v-model="url" type="url" placeholder="https://example.com"
        @keypress.enter="openUrl(url)" />
      <button class="url-button" @click="openUrl(url)">Go</button>
    </div>
    <p>これは何？</p>
    <p>入力したURLをツールバー（例えばブックマークバーなど）なしで開くことが出来ます。</p>
  </div>
</template>

<style scoped></style>
