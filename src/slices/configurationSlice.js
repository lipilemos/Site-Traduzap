import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import configurationService from "../services/configurationService";

const initialState = {
  configurations: [],
  configuration: null,
  error: false,
  success: false,
  loading: false,
  message: null,
};

// insert an user's configuration
export const insertConfiguration = createAsyncThunk(
  "configuration/insert",
  async (configuration, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await configurationService.insertConfiguration(configuration, token);

    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);
// insert an user's configuration
export const insertNewConfiguration = createAsyncThunk(
  "configuration/newinsert",
  async (id,thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await configurationService.insertNewConfiguration(token);

    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);
// Get user configuration
export const getUserConfigurations = createAsyncThunk(
  "configuration/userconfiguration",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await configurationService.getUserConfiguration(id, token);
    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Get configuration
export const getConfigurationById = createAsyncThunk(
  "configuration/getconfiguration",
  async (id, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token;
  const data = await configurationService.getConfiguration(id, token);

  // Check for errors
  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }

  return data;
});

// Delete a configuration
export const deleteConfiguration = createAsyncThunk(
  "configuration/delete",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await configurationService.deleteConfirutarion(id, token);

    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Update a configuration
export const updateConfiguration = createAsyncThunk(
  "configuration/update",
  async (configurationData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await configurationService.updateConfiguration(configurationData, token);

    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Get all configuration
export const getAllConfiguration = createAsyncThunk(
  "configuration/getall", 
  async (_,thunkAPI) => {  
    const token = thunkAPI.getState().auth.user.token;
    
  const data = await configurationService.getConfiguration(token);
  // Check for errors
  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }
  return data;
});
// Add listContact
export const addListContact = createAsyncThunk(
  "configuration/addcontact",
  async (dataContact, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await configurationService.addContactList(
      {id:dataContact.id},
      { contact:dataContact.contact },
      token
    );

    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);
export const deleteListContact = createAsyncThunk(
  "configuration/deletecontact",
  async (contactData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await configurationService.deleteContactList(
      { contact: contactData.contact },
      contactData.id,
      token
    );

    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);
export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    resetConfiguration: (state) => {
      state.message = null;
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(insertConfiguration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(insertConfiguration.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.configuration = action.payload;
        state.message = "Configuração publicada com sucesso!";
      })
      .addCase(insertConfiguration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.configuration = null;
      })
      .addCase(insertNewConfiguration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(insertNewConfiguration.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.configuration = action.payload;
        state.message = "Configuração publicada com sucesso!";
      })
      .addCase(insertNewConfiguration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.configuration = null;
      })
      .addCase(getUserConfigurations.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(getUserConfigurations.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.configuration = action.payload;
      })
      .addCase(getConfigurationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getConfigurationById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.configuration = action.payload;
      })
      .addCase(addListContact.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        if (state.configuration.listContact) {
          if(state.configuration.listContact.includes(action.payload.contact)) 
             state.configuration.listContact.splice(state.configuration.listContact.indexOf(action.payload.contact), 1) 
          else 
             state.configuration.listContact.push(action.payload.contact)
        }
        state.configuration.listContact.map((configuration) => {
          if (configuration._id === action.payload.contact) {
            if(configuration.listContact.includes(action.payload.contact)) 
             return configuration.listContact.splice(configuration.listContact.indexOf(action.payload.contact), 1) 
          else 
             return configuration.listContact.push(action.payload.contact)
          }
          return configuration;
        });

        state.message = action.payload.message;
      })
      .addCase(addListContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteListContact.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        if (state.configuration.listContact) {
          if(state.configuration.listContact.includes(action.payload.contact)) 
             state.configuration.listContact.splice(state.configuration.listContact.indexOf(action.payload.contact), 1) 
          else 
             state.configuration.listContact.push(action.payload.contact)
        }
        state.configuration.listContact.map((configuration) => {
          if (configuration._id === action.payload.contact) {
            if(configuration.listContact.includes(action.payload.contact)) 
             return configuration.listContact.splice(configuration.listContact.indexOf(action.payload.contact), 1) 
          else 
             return configuration.listContact.push(action.payload.contact)
          }
          return configuration;
        });

        state.message = action.payload.message;
      })
      .addCase(deleteListContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteConfiguration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteConfiguration.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.configurations = state.configurations.filter((configuration) => {
          return configuration._id !== action.payload.id;
        });

        state.message = action.payload.message;
      })
      .addCase(deleteConfiguration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.configuration = null;
      })
      .addCase(updateConfiguration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateConfiguration.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.configuration = action.payload.configuration
        state.message = action.payload.message;
      })
      .addCase(updateConfiguration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.configuration = null;
      })
      .addCase(getAllConfiguration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllConfiguration.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.configurations = action.payload;
      })
  },
});

export const { resetConfiguration } = configurationSlice.actions;
export default configurationSlice.reducer;
