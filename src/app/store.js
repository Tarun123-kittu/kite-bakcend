import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/Auth/authSlice";
import { DashboardSlice } from "./features/Dashboard/DashboardSlice";
import { indexSlice } from "./features/Report/reportSlice";
import { AbstractSlice } from "./features/Abstract/AbstractSlice";
export default configureStore({
    reducer: {
        auth : authSlice.reducer,
        dashboard: DashboardSlice.reducer,
        index: indexSlice.reducer,
        abstract: AbstractSlice.reducer,
    }

});