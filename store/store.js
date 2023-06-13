import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Vendor from "./vendorSlice/index";
export const store = configureStore({
  reducer: { Vendor },
});
