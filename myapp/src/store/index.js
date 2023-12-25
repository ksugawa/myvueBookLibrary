import { createStore } from "vuex";
// import { VuexPersistence } from "vuex-persist";

// const vuexPersist = new VuexPersistence({
//   storage: localStorage,
// });

export default createStore({
    state: {
        count: 0,
        books: []
    },
    getters: {
      getCount: (state) => {
        return state.books.length
      },
      getAll: (state) => {
        return state.books
      }
    },
    mutations: {
      save (state, newBook) {
        newBook.id = ++state.count
        state.books.unshift(newBook)
      }
    },
    actions: {
    },
    modules: {
    }
})