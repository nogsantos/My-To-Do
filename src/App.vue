<template>
  <a-layout class="app-layout">
    <app-nav></app-nav>
    <a-layout-content class="app-layout-content">
      <a-row :gutter="8">
        <a-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
          <todo-form></todo-form>
        </a-col>
        <a-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
          <todo-list></todo-list>
        </a-col>
        <a-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
          <done-list></done-list>
        </a-col>
      </a-row>
    </a-layout-content>
    <app-footer></app-footer>
    <a-back-top />
  </a-layout>
</template>

<script src="./app.js"></script>
<style src="./app.scss" lang="scss" scoped></style>
