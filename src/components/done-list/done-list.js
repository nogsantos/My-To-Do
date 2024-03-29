import { mapGetters, mapActions } from 'vuex';

import { AppExport } from '@/components/';
import { DateHelper } from '@/mixins/';

const store = {
  module: {
    done: 'done',
  },
};

export default {
  name: 'done-list',
  components: {
    'app-export': AppExport,
  },
  mixins: [DateHelper],
  computed: {
    ...mapGetters(store.module.done, {
      list_of_done: 'list',
    }),
  },
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    ...mapActions(store.module.done, ['list', 'exclude']),
  },
  created() {
    this.list();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
