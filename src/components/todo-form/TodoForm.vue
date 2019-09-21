<template>
  <a-affix :offsetTop="70">
    <a-layout class="app-layout-form">
      <a-divider>Create a To Do</a-divider>
      <a-form :form="form" autocomplete="off">
        <a-form-item>
          <a-input
            size="large"
            placeholder="To Do Title"
            v-decorator="[
              'title',
              {
                rules: [
                  { min: 3, message: 'Ensure this field has min 3 character.' },
                  { required: true, message: 'Informe a Title' },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item>
          <a-textarea :rows="4" placeholder="To Do observation" v-decorator="['observation']" />
        </a-form-item>
      </a-form>
      <a-col :span="24">
        <a-button size="large" @click="add" block type="primary">Add</a-button>
      </a-col>
      <a-row v-if="typeof todo.id !== 'function'">
        <a-divider orientation="left">Last interacted To Do</a-divider>
        <ul>
          <li>Title: {{ todo.title || '' }}</li>
          <li>Observation: {{ todo.observation || '' }}</li>
          <li>Created at: {{ format(todo.created_at || '') }}</li>
        </ul>
      </a-row>
    </a-layout>
  </a-affix>
</template>

<script src="./todo-form.js"></script>
<style src="./todo-form.scss" lang="scss" scoped></style>
