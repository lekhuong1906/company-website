import { createStore } from 'vuex';
import auth from './auth';
import department from './department';

const store = createStore({
  modules: {
    auth,
    department,
  }
});

export default store;
