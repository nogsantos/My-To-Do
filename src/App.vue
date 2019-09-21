<template>
  <a-layout class="app-layout">
    <AppNav></AppNav>
    <a-layout-content class="app-layout-content">
      <a-row :gutter="8">
        <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
          <TodoForm />
        </a-col>
        <a-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
          <TodoList></TodoList>
        </a-col>
        <a-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
          <DoneList></DoneList>
        </a-col>
      </a-row>
    </a-layout-content>
    <AppFooter></AppFooter>
    <a-back-top />
  </a-layout>
</template>

<script src="./app.js"></script>
<style src="./app.scss" lang="scss" scoped></style>
