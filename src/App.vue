<template>
  <a-layout class="app-layout">
    <TodoNav></TodoNav>
    <a-layout-content class="app-layout-content">
      <a-row :gutter="8">
        <a-col :span="12">
          <TodoForm />
        </a-col>
        <a-col :span="12">
          <TodoList></TodoList>
        </a-col>
      </a-row>
    </a-layout-content>
    <TodoFooter></TodoFooter>
  </a-layout>
</template>

<script src="./app.js"></script>
<style src="./app.scss" lang="scss" scoped></style>
