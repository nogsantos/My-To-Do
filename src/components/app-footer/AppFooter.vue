<template>
  <a-layout-footer class="app-layout-footer">
    <a href="http://fabricionogueira.me" target="_blank" rel="noopener noreferrer">©Fabricio Nogueira</a>
    <span class="app-layout-footer-current-year">{{ year }}</span>
    <span class="app-layout-footer-helper">
      <a-button type="primary" size="large" shape="circle" icon="setting" @click="settings" />
    </span>
  </a-layout-footer>
</template>

<script src="./app-footer.js"></script>
<style src="./app-footer.scss" lang="scss" scoped></style>
