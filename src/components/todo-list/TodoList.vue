<template>
  <a-layout class="app-layout-list">
    <a-skeleton :loading="loading" active>
      <a-card title="To Do" v-if="list_of_todo.length > 0">
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
                <span class="app-layout-list-title">
                  <a-input v-model="todo.title"></a-input>
                  <div class="app-layout-list-subtitle">{{ todo.created_at }}</div>
                </span>
              </div>
              <div slot="description">
                <a-textarea v-model="todo.observation" :rows="4"></a-textarea>
              </div>
            </a-card-meta>
            <a-row :gutter="8">
              <a-col :span="8">
                <a-button
                  type="primary"
                  shape="circle"
                  icon="check"
                  @click="
                    exclude(todo);
                    createDone(todo);
                  "
                ></a-button>
              </a-col>
              <a-col :span="8">
                <a-button type="default" shape="circle" @click="updateToDo(todo)" icon="edit"></a-button>
              </a-col>
              <a-col :span="8">
                <a-popconfirm okText="Yes" cancelText="No" @confirm="exclude(todo)">
                  <template slot="title">
                    <p>Are you sure, do you want to delete {{ todo.title }}?</p>
                  </template>
                  <a-icon slot="icon" type="question-circle-o" style="color: red" />
                  <a-button type="danger" shape="circle" icon="delete"></a-button>
                </a-popconfirm>
              </a-col>
            </a-row>
          </a-card-grid>
        </a-col>
      </a-card>
      <div v-else>
        <h2>You have nothing To Do today yet, let's do something!</h2>
        <AppEmoji></AppEmoji>
      </div>
    </a-skeleton>
  </a-layout>
</template>

<script src="./todo-list.js"></script>
<style src="./todo-list.scss" lang="scss"></style>
