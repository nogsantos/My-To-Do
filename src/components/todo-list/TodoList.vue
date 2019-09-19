<template>
  <a-layout class="app-layout-list">
    <a-row :gutter="8">
      <a-col class="app-layout-list--center" :span="24">
        <h1>Today</h1>
      </a-col>
    </a-row>
    <a-row :gutter="8">
      <a-col :span="24">List</a-col>
    </a-row>
  </a-layout>
</template>

<script src="./todo-list.js"></script>
<style src="./todo-list.scss" lang="scss" scoped></style>
