import { createStore } from 'vuex';
import auth from './auth';
// import department from './department';

const store = createStore({
  modules: {
    auth: auth,
    // department: department,
  }
});

export default store;
