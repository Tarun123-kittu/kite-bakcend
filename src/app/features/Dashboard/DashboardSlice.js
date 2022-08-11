import {createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchdashboard=createAsyncThunk(
    'dashboard/dashboard',
    async({filter, token} , thunkAPI)=>{
        try{
            return await axios.get(`${process.env.REACT_APP_BASE_URL}v1/dashboard?${filter}`,{headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
               }}).then((response)=>{
                return response.data
               }).catch( (e) => {
                console.log(e)
                let error="";
                if (e.response) {
                    error=e.response.data;
                  } else if (e.request) {
                    error=e.request;
                  } else {
                    error=e.message;
                  }
                return thunkAPI.rejectWithValue(error)                
              });
        }catch(error){
            return thunkAPI.rejectWithValue(error)
        }
    }
    )

    export const DashboardSlice = createSlice({
        name : 'dashboard',
        initialState: {
            overview:[],
            cpcv:[],
            egRate:[],
            ctr:[],
            views:[],
            impressions:[],
            device: [],
            format:[],
            graph:[],
            formats:[],
            campaign:[],
            isFetching:false,
            isSuccess:false,
            isError: false,
            error: '',    
        },
        reducers : {
            clearState: (state) =>{
                state.isFetching= false;
                state.isSuccess= false;
                state.isError = false;
                return state;
            }
    
        },
        extraReducers : {
            [fetchdashboard.fulfilled]: (state, { payload }) => {
                state.overview=payload.data.overview;
                state.cpcv=payload.data.cpcv;
                state.egRate=payload.data.egRate;
                state.ctr=payload.data.ctr;
                state.views=payload.data.views;
                state.impressions=payload.data.impressions;
                state.device= payload.data.device;
                state.format=payload.data.format;
                state.graph=payload.data.graph;
                state.formats=payload.data.formats;
                state.campaign=payload.data.campaign;
                state.isFetching = false;
                state.isSuccess = true;
                state.isError=false;
              },
              [fetchdashboard.rejected]: (state, { payload }) => {
                state.isFetching = false;
                state.isError = true;
                state.error = payload;
              },
              [fetchdashboard.pending]: (state) => {
                state.isFetching = true;
              },
        }
    });
    export const {clearState} = DashboardSlice.actions;
export const dashboardSelector = (state) => state.dashboard;