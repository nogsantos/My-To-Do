<template>
  <a-layout-header class="app-layout-nav">
    <div class="app-layout-nav-logo">Fabricio Nogueira</div>
    Total of ToDo tasks {{ total_of_todo.length || 0 }}
    Total of Done tasks {{ total_of_done.length || 0 }}
  </a-layout-header>
</template>

<script src="./app-nav.js"></script>
<style src="./app-nav.scss" lang="scss"></style>
