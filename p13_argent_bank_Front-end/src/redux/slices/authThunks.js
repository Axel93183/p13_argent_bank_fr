import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserProfile } from "../../services/apiServices";

export const updateUserProfileThunk = createAsyncThunk(
  "user/updateProfile",
  async ({ token, userData }, { rejectWithValue }) => {
    try {
      const response = await updateUserProfile(token, userData);
      return response.body;
    } catch (error) {
      return rejectWithValue(error.message || "Une erreur est survenue");
    }
  }
);
