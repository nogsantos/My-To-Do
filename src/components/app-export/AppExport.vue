<template>
  <a-button ghost type="primary" icon="file-excel" :loading="loading" @click="handlerExport" class="btn btn-large">
    <span v-if="loading">Generating...</span>
    <span v-else>Export</span>
  </a-button>
</template>

<script src="./app-export.js"></script>
