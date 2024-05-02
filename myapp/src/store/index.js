import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    books: [],
    SearchQuery: "",
  },
  getters: {
    getCount: (state) => {
      return state.books.length;
    },
    getAll: (state) => {
      return state.books;
    },
    getSearchBooks: (state) => {
      return state.books.filter((book) => {
        return (
          book.title.toLowerCase().includes(state.SearchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(state.SearchQuery.toLowerCase())
        );
      });
    },
  },
  mutations: {
    save(state, newBook) {
      newBook.id = ++state.count;
      state.books.unshift(newBook);
    },
    updateSearchQuery(state, query) {
      state.SearchQuery = query;
    },
  },
  actions: {},
  modules: {},
});
