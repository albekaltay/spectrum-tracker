// types
import { ISpectrum } from "@/types/spectrum";
// utils
import axiosInstance, { endpoints } from "@/utils/axios";
// redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// -------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Requesting of Spectrum Status API
 * @returns {<ISpectrum>} - Responsing of Spectrum Status Object
 */
export const getSpectrumStatus = createAsyncThunk(
  "spectrum-status",
  // if you type your function argument here
  async () => {
    const response = await axiosInstance<ISpectrum>(
      endpoints.spectrum.status
    );
    return response.data; //Returned
  }
);

/**
 * Requesting of Spectrum Action API
 * * @returns {string}} - Responsing of string as ""
 */
export const actOnSpectrum = createAsyncThunk(
  "actOnSpectrum",
  // if you type your function argument here
  async () => {
    const response = await axiosInstance(
      endpoints.spectrum.action
    );    
     return response.data; //Returned
  }
);

export interface InitialState {
  spectrumData: ISpectrum | null;
  sprectumDataLoading: boolean;
} 

const initialState: InitialState = {
  spectrumData: null,
  sprectumDataLoading: true
};

export const spectrumSlice = createSlice({
  name: "spectrum",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpectrumStatus.pending, (state, action) => {
      state.sprectumDataLoading = true
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    });
    builder.addCase(getSpectrumStatus.fulfilled, (state, action) => {
         state.spectrumData = action.payload;
         state.sprectumDataLoading = false;
    });
    builder.addCase(getSpectrumStatus.rejected, (state, action) => {
      state.sprectumDataLoading = false;
 });
  },
});

// Action creators are generated for each case reducer function
export const {} = spectrumSlice.actions;

export default spectrumSlice.reducer;
