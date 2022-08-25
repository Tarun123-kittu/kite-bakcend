import {createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const index = createAsyncThunk(
    'reports/index',
    async({},thunkAPI) => {
        try{
            return await axios.get(`${process.env.REACT_APP_BASE_URL}v1/index` ,{headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
              }}).then( (response) => {
                return response.data;
              }).catch( (e) => {
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

export const indexSlice = createSlice({
    name : 'index',
    initialState: {
        products : [],
        countries : [],
        ageRanges : [],
        error: '',
        isFetching : false,
        isError : false,
        isSuccess : false
        
    },
    reducers : {
        clearState: (state) =>{
            state.isLoggedIn= false;
            state.isFetching= false;
            state.isSuccess= false;
            state.isError = false;
            return state;
        }

    },
    extraReducers : {
      
        [index.fulfilled]: (state, { payload }) => ({
            ...state,
            products:payload.data.products,
            countries:payload.data.countries,
            ageRanges:payload.data.ageRanges,
            isFetching : false,
            isSuccess : true,
            showgraph: true,
            isLoggedIn : true,
            isError:false
          }),
          [index.rejected]: (state, { payload }) => ({
            ...state,
            isFetching:false,
            isError:true,
            error:payload
          }),
          [index.pending]: (state) => ({
            ...state,
            isFetching:true
          }),
    }
});

export const {clearState} = indexSlice.actions;
export const reportSelector = (state) => state.index;