import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserLocation, getAddress } from '../../services/apiGeocoding';

// Function to fetch user address and location data
export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function (_, { rejectWithValue }) {
    try {
      // Get the user's geolocation (latitude and longitude)
      const { latitude, longitude } = await getUserLocation();

      // Fetch the address from the API
      const address = await getAddress({ latitude, longitude });

      // Return the address and coordinates
      return { position: { latitude, longitude }, address };
    } catch (error) {
      // Return custom error message if something goes wrong
      return rejectWithValue(error.message || 'Failed to fetch address');
    }
  }
);

const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'There was a problem getting your address. Please try again.';
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
