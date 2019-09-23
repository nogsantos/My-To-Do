export default {
  name: 'app-export',
  props: {
    source: {
      type: String,
      required: true,
    },
    resource: {
      type: Array,
      required: true,
    },
  },
  data: () => {
    return {
      loading: false,
    };
  },
  methods: {
    handlerExport() {
      this.loading = true;
      setTimeout(() => {
        let csv = `${Object.keys(...this.resource).join(',')}\n`;
        this.resource.forEach(item => {
          csv += `${Object.values(item).join(',')}`;
          csv += '\n';
        });
        this.loading = false;

        const hidden = document.createElement('a');
        hidden.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hidden.target = '_blank';
        hidden.download = `my_To_Do_${this.source}_${new Date()
          .toISOString()
          .replace(' ', '_')
          .toLowerCase()}.csv`;
        hidden.click();
        this.$message.info('Success exported');
      }, 1000);
    },
  },
};
