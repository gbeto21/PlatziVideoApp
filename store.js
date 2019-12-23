import {createStore} from 'redux';
import reducer from './reducers/videos';
import {persistStore, persistReducer} from './reducers/videos';
import storage from 'redux-persist/lib/storage';

// const store = createStore(reducer, {
//   suggestionList: 'Platzi',
//   categoryList: [],
// });

const persistConfig = {
  key: 'root',
  storage,
  blackList: ['selectedMovie'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export {store, persistor};
