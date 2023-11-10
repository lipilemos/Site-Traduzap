import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import plansService from "../services/plansService";

const initialState = {
  userPlan: null,
  error: false,
  success: false,
  loading: false,
  message: null,
};

// insert user plans
export const insertPlans = createAsyncThunk(
  "plans/insert",
  async (plans, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await plansService.insertPlans(plans, token);

    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Get user plans
export const getUserPlans = createAsyncThunk(
  "plans/userplans",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await plansService.getUserPlans(id, token);
    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Get plan by id
export const getPlansById = createAsyncThunk(
  "plans/getplan",
  async (id, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token;
  const data = await plansService.getPlansById(id, token);

  // Check for errors
  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }

  return data;
});
// Delete a plans
export const deletePlans = createAsyncThunk(
  "plans/delete",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await plansService.deletePlans(id, token);

    console.log(data.errors);
    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Update a plans
export const updatePlans = createAsyncThunk(
  "plans/update",
  async (plansData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await plansService.updatePlans(
      { planId: plansData.planId, paymentId: plansData.paymentId },
      plansData.id,
      token
    );

    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Get all plans
export const getAllPlans = createAsyncThunk(
  "photo/getall", 
  async (_,thunkAPI) => {  
    const token = thunkAPI.getState().auth.user.token;
    
  const data = await plansService.getAllPlans(token);
  // Check for errors
  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }
  return data;
});

export const plansSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    resetUserPlan: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = null;
      state.userPlan = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(insertPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(insertPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userPlan = action.payload;
        // state.plans.unshift(action.payload);
        state.message = "Plano adicionado com sucesso!";
      })
      .addCase(insertPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.userPlan = null;
      })
      .addCase(getUserPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userPlan = action.payload
      })
      .addCase(getPlansById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlansById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userPlan = action.payload;
      })      
      .addCase(deletePlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePlans.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userPlan = null
        // state.plans = state.plans.filter((plan) => {
        //   return plan._id !== action.payload.id;
        // });
        state.message = action.payload.message;
      })
      .addCase(deletePlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.userPlan = null;
      })
      .addCase(updatePlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePlans.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userPlan = action.payload
        // state.plans.map((plan) => {
        //   if (plan._id === action.payload.plan._id) {
        //     return (plan.name = action.payload.plan.name);
        //   }
        //   return plan;
        // });
        state.message = action.payload.message;
      })
      .addCase(updatePlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.userPlan = null;
      })      
      .addCase(getAllPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userPlan = action.payload;
      })      
  },
});

export const { resetUserPlan } = plansSlice.actions;
export default plansSlice.reducer;
