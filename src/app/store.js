import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/Auth/authSlice";
import { DashboardSlice } from "./features/Dashboard/DashboardSlice";

export default configureStore({
    reducer: {
        auth : authSlice.reducer,
        dashboard: DashboardSlice.reducer
    }

});