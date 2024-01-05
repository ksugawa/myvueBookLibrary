import { createStore } from "vuex";
// import { VuexPersistence } from "vuex-persist";

// const vuexPersist = new VuexPersistence({
//   storage: localStorage,
// });

export default createStore({
    state: {
        count: 0,
        books: [],
        searchBooks: "",
    },
    getters: {
      getCount: (state) => {
        return state.books.length;
      },
      getAll: (state) => {
        return state.books;
      },
      getSeachBooks: (state) => state.searchBooks,
    },
    mutations: {
      save (state, newBook) {
        newBook.id = ++state.count;
        state.books.unshift(newBook);
      },
      updateSearchBooks(state, query) {
        state.searchBooks = query;
      },
    },
    actions: {
    },
    modules: {
    }
});