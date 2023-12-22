import { createStore } from "vuex";
import { VuexPersistence } from "vuex-persist";

const vuexPersist = new VuexPersistence({
  storage: localStorage,
});

export default createStore({
    state: {
        count: 0,
        books: []
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})