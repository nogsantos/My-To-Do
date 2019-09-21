<template>
  <a-layout class="app-layout-list">
    <a-skeleton :loading="loading" active>
      <a-card title="Done" v-if="list_of_done.length > 0">
        <a-card-grid
          style="width:25%;textAlign:'center'"
          v-for="done in list_of_done"
          :key="done.id"
        >
          <a-card-meta>
            <div slot="title">
              <span class="app-layout-list-title">{{ done.title }}</span>
              <span class="app-layout-list-subtitle">{{ done.timestamp }}</span>
            </div>
            <div slot="description">{{ done.observation }}</div>
          </a-card-meta>
          <a-row :gutter="8">
            <a-col :span="8">
              <a-button type="danger" shape="circle" icon="delete" @click="exclude(done)"></a-button>
            </a-col>
          </a-row>
        </a-card-grid>
      </a-card>
    </a-skeleton>
  </a-layout>
</template>

<script src="./done-list.js"></script>
<style src="./done-list.scss" lang="scss" scoped></style>