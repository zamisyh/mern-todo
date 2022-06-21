import { configureStore } from "@reduxjs/toolkit";
import { createStore } from 'redux'
import reducers from './reducers/wrapReducer'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['TASK']
}

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = createStore(persistedReducer)

export const persistor = persistStore(store)

