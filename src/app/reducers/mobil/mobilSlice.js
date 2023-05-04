import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMobilApi } from './mobilApi';

export const getMobil = createAsyncThunk(
    'mobil/getMobil',
    async() => {
        const res = fetchMobilApi();
        return res
    }
)

export const filteMobil = createAsyncThunk(
    'mobil/filterMobil',
    async(payload) => {
        const res = fetchMobilApi(payload);
        return res
    }
)

export const mobilSlice = createSlice({
    name: 'mobil',
    initialState: {
        data: [],
        initData: [],
        loading: 'idle'
    },
    reducers:{
        filterMobil: (state, action) => {
            const filters = action.payload
            state.data = state.initData.filter(el => {
                return Object.keys(filters).every(filter => {
                    if(filter === 'availableAt') {
                        const d1 = new Date(filters[filter]);
                        const d2 = new Date(el[filter]);
                        console.log(d1, d2)
                        return d1.getTime() >= d2.getTime() 
                    }
                    return filters[filter] === el[filter]
                });
            })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMobil.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(getMobil.fulfilled, (state, action) => {
                state.loading = 'idle'
                state.data = action.payload
                state.initData = action.payload
            })
    }
})

export const selectMobil = state => state.mobil
export const { filterMobil } = mobilSlice.actions
export default mobilSlice.reducer