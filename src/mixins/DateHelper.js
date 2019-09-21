export default {
  methods: {
    format(date) {
      const formated_date = new Date(date);
      const day = formated_date.getDate();
      const month = formated_date.getMonth() + 1;
      const year = formated_date.getFullYear();
      const timer = `${formated_date.getHours()}:${formated_date.getSeconds()}`;
      return `${('0' + day).slice(-2)}/${('0' + month).slice(-2)}/${year} ${timer}`;
    },
  },
};
