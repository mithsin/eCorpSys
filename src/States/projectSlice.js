import { createSlice } from '@reduxjs/toolkit';
import { fullData } from  'MockData';
import axios from 'axios';

export const projectSlice = createSlice({
    name: 'projectState',
    initialState: {
        projects: [fullData]
    },
    reducers: {
        setProjectState: (state, action) => {
            return {...state, ...action.payload}
        }
    },
});

export const projectState = state => state.projectState.projects;

export default projectSlice.reducer;