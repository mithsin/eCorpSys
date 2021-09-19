import { createSlice } from '@reduxjs/toolkit';
import { ProjectsData } from  'MockData';
import axios from 'axios';

export const projectSlice = createSlice({
    name: 'projectState',
    initialState: {
        projects: ProjectsData
    },
    reducers: {
        setProjectState: (state, action) => {
            return {...state, ...action.payload}
        }
    },
});

export const projectsState = state => state.projectState.projects;

export default projectSlice.reducer;