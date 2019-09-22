<template>
  <a-modal title="Settings" :visible="visible" @cancel="cancel">
    <a-tabs defaultActiveKey="1" tabPosition="left">
      <a-tab-pane tab="About" key="1">
        <h2>By Fabricio Nogueira</h2>
        <p>
          <a href="http://fabricionogueira.me" target="_blank" rel="noopener noreferrer">fabricionogueira.me</a>
        </p>
        <p>
          <a href="mailto:nogsantos@gmail.com">nogsantos@gmail.com</a>
        </p>
        <p>
          <a href="https://github.com/nogsantos" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
      </a-tab-pane>
      <a-tab-pane tab="Settings" key="2">
        <a-divider orientation="left">To Do</a-divider>
        <p>
          <a-button block @click="todoGenerate">Bulk To Do generate</a-button>
        </p>
        <p>
          <a-button block type="danger" @click="todoExclude">Bulk To Do exclude</a-button>
        </p>
        <a-divider orientation="left">Done</a-divider>
        <p>
          <a-button block @click="doneGenerate">Bulk Done generate</a-button>
        </p>
        <p>
          <a-button block type="danger" @click="doneExclude">Bulk Done exclude</a-button>
        </p>
        <a-divider orientation="left">All</a-divider>
        <p>
          <a-button block type="danger" @click="excludeAll">Exclude all</a-button>
        </p>
      </a-tab-pane>
    </a-tabs>
    <template slot="footer">
      <a-button key="back" @click="cancel">Close</a-button>
    </template>
  </a-modal>
</template>

<script src="./app-settings.js"></script>
