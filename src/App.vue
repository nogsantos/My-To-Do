<template>
  <a-layout class="app-layout">
    <AppNav></AppNav>
    <a-layout-content class="app-layout-content">
      <a-row :gutter="8">
        <a-col :span="6">
          <TodoForm />
        </a-col>
        <a-col :span="9">
          <TodoList></TodoList>
        </a-col>
        <a-col :span="9">
          <DoneList></DoneList>
        </a-col>
      </a-row>
    </a-layout-content>
    <AppFooter></AppFooter>
  </a-layout>
</template>

<script src="./app.js"></script>
<style src="./app.scss" lang="scss" scoped></style>
