import {configureStore} from "@reduxjs/toolkit";
import cartreducer from "./cartslice";    //importing reducer

import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";

let persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart']
};

let rootReducer = combineReducers({
    cart: cartreducer
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: {ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
    }
);

let persistor = persistStore(store);

export {store, persistor};