import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/Auth/authSlice";
import { DashboardSlice } from "./features/Dashboard/DashboardSlice";
import { indexSlice } from "./features/Report/reportSlice";

export default configureStore({
    reducer: {
        auth : authSlice.reducer,
        dashboard: DashboardSlice.reducer,
        index: indexSlice.reducer
    }

});