<template>
  <a-layout class="app-layout-list">
    <a-skeleton :loading="loading" active>
      <a-card v-if="list_of_todo.length > 0">
        <span slot="title" class="app-layout-list-card-title">
          <span class="app-layout-list-card-title--text">To Do</span>
          <span class="app-layout-list-card-title--action">
            <app-export :resource="list_of_todo" source="todo"></app-export>
          </span>
        </span>
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="12"
          :xl="8"
          class="app-layout-list-card"
          v-for="todo in list_of_todo"
          :key="todo.id"
        >
          <a-card-grid class="app-layout-list-card-grid">
            <a-card-meta>
              <div slot="title">
                <span class="app-layout-list-card-grid-title">
                  <a-input v-model="todo.title"></a-input>
                </span>
              </div>
              <div slot="description">
                <a-textarea v-model="todo.observation" :rows="4"></a-textarea>
                <div class="app-layout-list-card-grid-info">Create at {{ format(todo.created_at) }}</div>
              </div>
            </a-card-meta>
            <a-divider class="app-layout-list-card-grid-divider"></a-divider>
            <a-row class="app-layout-list-card-grid-actions" :gutter="8">
              <a-col :span="8">
                <a-tooltip title="Make as done" placement="top">
                  <a-button
                    type="primary"
                    shape="circle"
                    icon="check"
                    @click="
                      excludeTodo(todo);
                      createDone(todo);
                    "
                  ></a-button>
                </a-tooltip>
              </a-col>
              <a-col :span="8">
                <a-tooltip title="Edit save" placement="top">
                  <a-button type="default" shape="circle" @click="updateToDo(todo)" icon="edit"></a-button>
                </a-tooltip>
              </a-col>
              <a-col :span="8">
                <a-popconfirm okText="Yes" cancelText="No" @confirm="exclude(todo)">
                  <template slot="title">
                    <p>Are you sure, do you want to delete {{ todo.title }}?</p>
                  </template>
                  <a-icon slot="icon" type="question-circle-o" style="color: red" />
                  <a-tooltip title="Exclude" placement="top">
                    <a-button type="danger" shape="circle" icon="delete"></a-button>
                  </a-tooltip>
                </a-popconfirm>
              </a-col>
            </a-row>
          </a-card-grid>
        </a-col>
      </a-card>
      <div v-else class="app-layout-no_todo">
        <h2>You have nothing To Do today yet, let's do something!</h2>
        <app-emoji></app-emoji>
      </div>
    </a-skeleton>
  </a-layout>
</template>

<script src="./todo-list.js"></script>
<style src="./todo-list.scss" lang="scss" scoped></style>
