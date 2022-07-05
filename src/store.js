import { configureStore } from "@reduxjs/toolkit";
import reducers from './reducers/wrapReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)


const store = configureStore({
    reducer: reducers
})

export default store;