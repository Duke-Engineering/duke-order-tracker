import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import appSlice from '../features/app/app-slice';
//import authSlice from '../features/auth/auth-slice';
// import cartSlice from '../features/cart/cart-slice';
// import productSlice from '../features/product/product-slice';
// import shopSlice from '../features/shop/shop-slice';
import storage from "localforage"
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
//   cart: cartSlice,
   app: appSlice,
//   shop: shopSlice,
//   product: productSlice,
 // auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
