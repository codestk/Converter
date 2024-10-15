import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    title: "State Test",
  }),
  actions: {
    increaseCounter(amount) {
      this.count += amount;
    },

    deceaseCounter(amount) {
      this.count -= amount;
    },
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return "event";
      return "odd";
    },
  },
});

// export const useAuth = defineStore("auth", {

// });

// make sure to pass the right store definition, `useAuth` in this case.
// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot));
// }
