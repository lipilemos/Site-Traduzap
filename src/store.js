import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import configurationReducer from "./slices/configurationSlice";
import plansReducer from "./slices/plansSlice";
import typesPlansReducer from "./slices/typesPlansSlice";
import paymentsReducer from  './slices/paymentsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    configuration: configurationReducer,
    userPlan: plansReducer,
    plans: typesPlansReducer,
    payment: paymentsReducer
  },
});
