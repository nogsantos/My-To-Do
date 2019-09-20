/**
 * Register a new module into store
 *
 * @param {String} name Module name
 * @param {Vuex Store} store Vuex default store
 * @param {Vuex Store} moduleToRegister New store to register
 */
const register = (name, store, moduleToRegister) => {
  store.registerModule(name, moduleToRegister);
};

/**
 * Create and register a new module on vuex store
 *
 * @param {String} name Module name
 * @param {Store} moduleToRegister New store to register
 */
export default (name, toRegister) => {
  return {
    beforeCreate() {
      const store = this.$store;
      /**
       * If the store already exists, just reuse it, if not, create a new one
       */
      if (!(store && store.state && store.state[name])) {
        register(name, store, toRegister);
      }
    },
  };
};
