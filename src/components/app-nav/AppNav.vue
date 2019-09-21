<template>
  <a-layout-header class="app-layout-nav">
    <div class="app-layout-nav-logo">My To Do</div>
    <div class="app-layout-nav-counters">
      <a-col :span="6">
        <span class="app-layout-nav-counters--title">To Do:</span>

        <span class="app-layout-nav-counters--destaq">{{ total_of_todo.length || 0 }}</span>
      </a-col>
      <a-col :span="6">
        <span class="app-layout-nav-counters--title">Done:</span>

        <span class="app-layout-nav-counters--destaq">{{ total_of_done.length || 0 }}</span>
      </a-col>
      <a-col :span="6">
        <span class="app-layout-nav-counters--title">Total:</span>

        <span
          class="app-layout-nav-counters--destaq"
        >{{ (total_of_done.length + total_of_todo.length) || 0 }}</span>
      </a-col>
    </div>
  </a-layout-header>
</template>

<script src="./app-nav.js"></script>
<style src="./app-nav.scss" lang="scss"></style>
