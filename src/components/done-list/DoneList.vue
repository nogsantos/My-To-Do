<template>
  <a-layout class="app-layout-list">
    <a-skeleton :loading="loading" active>
      <a-card v-if="list_of_done.length > 0">
        <span slot="title" class="app-layout-list-card-title">
          <span class="app-layout-list-card-title--text">Done</span>
          <span class="app-layout-list-card-title--action">
            <app-export :resource="list_of_done" source="done"></app-export>
          </span>
        </span>
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="12"
          :xl="8"
          class="app-layout-list-card"
          v-for="done in list_of_done"
          :key="done.id"
        >
          <a-card-grid class="app-layout-list-card-grid">
            <a-card-meta>
              <div slot="title" class="app-layout-list-card-grid-title">{{ done.title }}</div>
              <div slot="description" class="app-layout-list-card-grid-description">
                <div>Created at {{ format(done.created_at) }}</div>
                <div>Done at {{ format(done.finished_at) }}</div>
                <div>{{ done.observation }}</div>
              </div>
            </a-card-meta>
            <a-divider class="app-layout-list-card-grid-divider"></a-divider>
            <a-row :gutter="8" class="app-layout-list-card-grid-actions">
              <a-col :span="8">
                <a-tooltip title="Exclude" placement="top">
                  <a-button type="danger" shape="circle" icon="delete" @click="exclude(done)"></a-button>
                </a-tooltip>
              </a-col>
            </a-row>
          </a-card-grid>
        </a-col>
      </a-card>
    </a-skeleton>
  </a-layout>
</template>

<script src="./done-list.js"></script>
<style src="./done-list.scss" lang="scss" scoped></style>
