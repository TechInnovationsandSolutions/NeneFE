import { configureStore } from "@reduxjs/toolkit";
import Vendor from "./vendorSlice/index";
import superAdmin from "./superAdminSlice";
export const store = configureStore({
  reducer: { Vendor,superAdmin },
});
