import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchabstract = createAsyncThunk(
    'abstract/fetchabstract',
    async ({ gender, age, country, token }, thunkAPI) => {
        try {
            return await axios.post(`${process.env.REACT_APP_BASE_URL}v1/abstract`, { gender, age, country }, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + token,
                }
            }).then((data) => {
                return { ...data.data }
            }).catch((e) => {
                return thunkAPI.rejectWithValue(e.response.data);
            })

        } catch (e) {
            let error = "";
            if (e.response) {
                error = e.response.data;
            } else if (e.request) {
                error = e.request;
            } else {
                error = e.message;
            }
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AbstractSlice = createSlice({
    name: "abstract",
    initialState: {
        incidencia: {},
        poblacion_proyectada: {},
        population_projection_by_age: {},
        use_as_per_age: {},
        status: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: ''
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
    },
    extraReducers: {
        [fetchabstract.fulfilled]: (state, { payload }) => ({

            ...state,
             isFetching: false,
            isSuccess:true,
            status:payload.message,
            incidencia:payload.data.incidencia,
            poblacion_proyectada:payload.data.poblacion_proyectada,
            population_projection_by_age:payload.data.population_projection_by_age,
            use_as_per_age:payload.data.use_as_per_age

            // state.isFetching = false;
            // state.isSuccess = true;
            // state.status = payload.message;
            // state.incidencia = payload.data.incidencia;
            // state.poblacion_proyectada = payload.data.poblacion_proyectada;
            // state.population_projection_by_age = payload.data.population_projection_by_age;
            // state.use_as_per_age = payload.data.use_as_per_age;
            // return state;

        }),
        [fetchabstract.pending]: (state) => ({
            ...state,
            isFetching: true
        }),
        [fetchabstract.rejected]: (state, { payload }) => ({
            ...state,
            isFetching:false,
            isError:true,
            errorMessage:payload.message
        }),
    }
})
export const { clearState } = AbstractSlice.actions;

export const abstractSelector = (state) => state.abstract;  