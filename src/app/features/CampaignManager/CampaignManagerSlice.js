import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


export const campaignfilter = createAsyncThunk(
  'filter/campaignfilter',
  async ({ token }, thunkAPI) => {
    try {
      return await axios.get(`${process.env.REACT_APP_DOT_NET_BASE_URL}campaignManager/campaign-filter`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).then((response) => {
        return response.data
      }).catch((e) => {
        let error = "";
        if (e.response) {
          error = e.response.data.message;
        } else if (e.request) {
          error = e.request;
        } else {
          error = e.message;
        }
        return thunkAPI.rejectWithValue(error)

      });

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const pipelinefilter = createAsyncThunk(
  'filter/pipelinefilter',
  async ({ token }, thunkAPI) => {
    try {
      return await axios.get(`${process.env.REACT_APP_DOT_NET_BASE_URL}campaignManager/pipeline-filter`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).then((response) => {
        return response.data
      }).catch((e) => {
        let error = "";
        if (e.response) {
          error = e.response.data.message;
        } else if (e.request) {
          error = e.request;
        } else {
          error = e.message;
        }
        return thunkAPI.rejectWithValue(error)

      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const statusfilter = createAsyncThunk(
  'filter/statusfilter',
  async ({ token }, thunkAPI) => {
    try {
      return await axios.get(`${process.env.REACT_APP_DOT_NET_BASE_URL}campaignManager/status-filter`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).then((response) => {
        return response.data
      }).catch((e) => {
        let error = "";
        if (e.response) {
          error = e.response.data.message;
        } else if (e.request) {
          error = e.request;
        } else {
          error = e.message;
        }
        return thunkAPI.rejectWithValue(error)

      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const advertizerfilter = createAsyncThunk(
  'filter/advertizerfilter',
  async ({ token }, thunkAPI) => {
    try {
      return await axios.get(`${process.env.REACT_APP_DOT_NET_BASE_URL}campaignManager/advertisers/get`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).then((response) => {
        return response.data
      }).catch((e) => {
        let error = "";
        if (e.response) {
          error = e.response.data.message;
        } else if (e.request) {
          error = e.request;
        } else {
          error = e.message;
        }
        return thunkAPI.rejectWithValue(error)

      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const getowners = createAsyncThunk(
  'filter/getowners',
  async ({ token, ownergroup }, thunkAPI) => {
    try {
      return await axios.get(`${process.env.REACT_APP_DOT_NET_BASE_URL}deal/owners/get?groupId=${ownergroup}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).then((response) => {
        return response.data
      }).catch((e) => {
        let error = "";
        if (e.response) {
          error = e.response.data.message;
        } else if (e.request) {
          error = e.request;
        } else {
          error = e.message;
        }
        return thunkAPI.rejectWithValue(error)

      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const applyfilter= createAsyncThunk(
  'filter/applyfilter',
  async({token, filter}, thunkAPI)=>{
    try {
      return await axios.get(`${process.env.REACT_APP_DOT_NET_BASE_URL}campaignManager/deals?${filter}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).then((response) => {
        return response.data
      }).catch((e) => {
        let error = "";
        if (e.response) {
          error = e.response.data.message;
        } else if (e.request) {
          error = e.request;
        } else {
          error = e.message;
        }
        return thunkAPI.rejectWithValue(error)

      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)


export const dealdetail=createAsyncThunk(
  'filter/dealdetail',
  async({token, dealId}, thunkAPI)=>{
    try{
      return await axios.get(`${process.env.REACT_APP_DOT_NET_BASE_URL}campaignManager/deal/${dealId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).then((response) => {
        return response.data
      }).catch((e) => {
        let error = "";
        if (e.response) {
          error = e.response.data.message;
        } else if (e.request) {
          error = e.request;
        } else {
          error = e.message;
        }
        return thunkAPI.rejectWithValue(error)

      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const CampaignManagerSlice = createSlice({
  name: 'campaignManager',
  initialState: {
    advertizer_filters: [],
    campaign_filters: [],
    pipeline_filter: [],
    status_filter: [],
    owner_groups: [],
    filtered_result: [],
    deal_detail:{},
    isFetching: false,
    isSuccess: false,
    isError: false,
    error: '',
  },
  reducers: {
    clearState: (state) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = false;
      return state;
    }

  },
  extraReducers: {
    [campaignfilter.fulfilled]: (state, { payload }) => {
      state.campaign_filters = payload.data;
      state.isFetching = false;
      state.isSuccess = true;
      state.isError = false;
    },
    [campaignfilter.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.error = payload;
    },
    [campaignfilter.pending]: (state) => {
      state.isFetching = true;
    },
    [pipelinefilter.fulfilled]: (state, { payload }) => {
      state.pipeline_filter = payload.data;
      state.isFetching = false;
      state.isSuccess = true;
      state.isError = false;
    },
    [pipelinefilter.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.error = payload;
    },
    [pipelinefilter.pending]: (state) => {
      state.isFetching = true;
    },
    [statusfilter.fulfilled]: (state, { payload }) => {
      state.status_filter = payload.data;
      state.isFetching = false;
      state.isSuccess = true;
      state.isError = false;
    },
    [statusfilter.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.error = payload;
    },
    [statusfilter.pending]: (state) => {
      state.isFetching = true;
    },
    [advertizerfilter.fulfilled]: (state, { payload }) => {
      state.advertizer_filters = payload.data;
      state.isFetching = false;
      state.isSuccess = true;
      state.isError = false;
    },
    [advertizerfilter.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.error = payload;
    },
    [advertizerfilter.pending]: (state) => {
      state.isFetching = true;
    },
    [getowners.fulfilled]: (state, { payload }) => {
      state.owner_groups = payload.data;
      state.isFetching = false;
      state.isSuccess = true;
      state.isError = false;
    },
    [getowners.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.error = payload;
    },
    [getowners.pending]: (state) => {
      state.isFetching = true;
    },
    [applyfilter.fulfilled]: (state, { payload }) => {
      state.filtered_result = payload.data;
      state.isFetching = false;
      state.isSuccess = true;
      state.isError = false;
    },
    [applyfilter.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.error = payload;
    },
    [applyfilter.pending]: (state) => {
      state.isFetching = true;
    },
    [dealdetail.fulfilled]: (state, { payload }) => {
      state.deal_detail = payload.data;
      state.isFetching = false;
      state.isSuccess = true;
      state.isError = false;
    },
    [dealdetail.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.error = payload;
    },
    [dealdetail.pending]: (state) => {
      state.isFetching = true;
    },
  }
})
export const { clearState } = CampaignManagerSlice.actions;
export const campaignManagerSelector = (state) => state.campaignManager;
