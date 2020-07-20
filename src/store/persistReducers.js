import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'personal-base-template',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};
