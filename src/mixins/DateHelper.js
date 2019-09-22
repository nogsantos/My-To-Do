export default {
  methods: {
    format(date) {
      const formated_date = new Date(date);
      const day = formated_date.getDate();
      const month = formated_date.getMonth() + 1;
      const year = formated_date.getFullYear();
      const timer = `${('0' + formated_date.getHours()).slice(-2)}h${('0' + formated_date.getSeconds()).slice(-2)}m`;
      return `${('0' + day).slice(-2)}/${('0' + month).slice(-2)}/${year} ${timer}`;
    },
  },
};
