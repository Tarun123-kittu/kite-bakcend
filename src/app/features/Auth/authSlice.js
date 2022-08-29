import {createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const toggle = createAsyncThunk(
  'users/toggle',
  async({isActive} , thunkAPI) => {
    return isActive;
  }
)

export const login = createAsyncThunk(
    'users/login',
    async({email, password} , thunkAPI) => {
        try{
            return await axios.post(`${process.env.REACT_APP_BASE_URL}v1/login` , {email, password},{headers: { 
                'Content-Type': 'application/json'
              }}).then( (response) => {
                localStorage.setItem('token', response.data.access_token);
                localStorage.setItem('type', response.data.user.type);
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


export const authSlice = createSlice({
    name : 'auth',
    initialState: {
        id : '',
        email : '',
        first_name : '',
        last_name: '',
        type: '',
        company: '',
        error: '',
        isLoggedIn : false,
        isFetching : false,
        isError : false,
        isSuccess : false,
        toggleActive : true
        
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
      [toggle.fulfilled] : (state , { payload }) => {
        state.toggleActive = payload;
        return state;
      },
        [login.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.isError=false;
            state.type = payload.user.type;
            return state;
          },
          [login.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.error = payload;
          },
          [login.pending]: (state) => {
            state.isFetching = true;
          },
    }
});

export const {clearState} = authSlice.actions;
export const authSelector = (state) => state.auth;
