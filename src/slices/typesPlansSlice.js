import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import typesPlansService from "../services/typesPlansService";

const initialState = {
  plans: [],
  plan: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

export const getTypesPlansById = createAsyncThunk(
  "plans/gettypesplan",
  async (id, thunkAPI) => {  
  const data = await typesPlansService.getTypePlansById(id);
  // Check for errors
  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }

  return data;
});
export const getAllTypesPlans = createAsyncThunk(
  "plans/getalltypesplans", 
  async (_, thunkAPI) => {  
    
  const data = await typesPlansService.getAllTypesPlans();
  // Check for errors
  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }
  return data;
});

export const typesPlansSlice = createSlice({
  name: "typesPlan",
  initialState,
  reducers: {
    resetTypesPlan: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = null;      
      state.plan = {};
      state.plans = [];
    },
  },
  extraReducers: (builder) => {
    builder      
      .addCase(getTypesPlansById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTypesPlansById.fulfilled, (state, action) => {        
        state.loading = false;
        state.success = true;
        state.error = null;
        state.plan = action.payload;
      })      
      .addCase(getAllTypesPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTypesPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.plans = action.payload;
      })      
  },
});

export const { resetTypesPlan } = typesPlansSlice.actions;
export default typesPlansSlice.reducer;
