import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import jobSlice from "./jobSlice"
import companySlice from "./companySlice"
import applicationSlice from "./applicationSlice"
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

// ✅ Custom storage - bypasses Vite issue completely
const customStorage = {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
}

const persistConfig = {
    key: 'root',
    version: 1,
    storage: customStorage
}

const rootReducer = combineReducers({
    auth: authSlice,
    job: jobSlice,
    company : companySlice,
    application : applicationSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;