import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paymentsService from "../services/paymentsService";

const initialState = {
    payment: null,
    errorPay: false,
    successPay: false,
    messagePay: null,
    errorPref: false,
    successPref: false,
    messagePref: null,
    loading: false,
    preference: null,
  };
  
  //process a new payment
  export const processPayment = createAsyncThunk(
    "payments/new",
    async (formData, thunkAPI) => {
      const token = thunkAPI.getState().auth.user.token;
      const data = await paymentsService.processPayments(formData, token);
  
      // Check for errors
      if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0]);
      }  
      return data;
    }
  );
  export const createPreference = createAsyncThunk(
    "payments/createpreference",
    async (formData, thunkAPI) => {
      const token = thunkAPI.getState().auth.user.token;
      const data = await paymentsService.createPreference(formData, token);
  
      // Check for errors
      if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0]);
      }  
      return data;
    }
  );
  export const getUserPayment = createAsyncThunk(
    "payments/getpaymentuser",
    async (user, thunkAPI) => {
      const token = thunkAPI.getState().auth.user.token;
      const data = await paymentsService.getUserPayment(user,token);
  
      // Check for errors
      if (data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0]);
      }  
      return data;
    }
  );
  
export const paymentsSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
      reset: (state) => {
        state.loading = false;
        state.errorPay = false;
        state.successPay = false;
        state.messagePay = null;
        state.errorPref = false;
        state.successPref = false;
        state.messagePref = null;
        state.payment = null;
        state.preference = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(processPayment.pending, (state) => {
          state.loading = true;
          state.errorPay = null;
        })
        .addCase(processPayment.fulfilled, (state, action) => {
          state.loading = false;
          state.successPay = true;
          state.errorPay = null;
          state.payment = action.payload;
          state.messagePay = "Pagamento realizado!";
        })
        .addCase(processPayment.rejected, (state, action) => {
          state.loading = false;
          state.errorPay = action.payload;
          state.payment = null;
        })  
        .addCase(createPreference.pending, (state) => {
          state.loading = true;
          state.errorPref = null;
        })
        .addCase(createPreference.fulfilled, (state, action) => {
          state.loading = false;
          state.successPref = true;
          state.errorPref = null;
          state.preference = action.payload;
          state.messagePref = "Preferencia criada!";
        })
        .addCase(createPreference.rejected, (state, action) => {
          state.loading = false;
          state.errorPref = action.payload;
          state.preference = null;
        })          
        .addCase(getUserPayment.pending, (state) => {
          state.loading = true;
          state.errorPay = null;
        })
        .addCase(getUserPayment.fulfilled, (state, action) => {
          state.loading = false;
          state.successPay = true;
          state.errorPay = null;
          state.payment = action.payload;
        })
        
    },
  });
  
  export const { reset } = paymentsSlice.actions;
  export default paymentsSlice.reducer;
  