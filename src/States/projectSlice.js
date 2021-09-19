import { createSlice } from '@reduxjs/toolkit';
import { ProjectsData } from  'MockData';
import axios from 'axios';

export const projectSlice = createSlice({
    name: 'projectState',
    initialState: {
        projects: ProjectsData
    },
    reducers: {
        setProjectsState: (state, action) => {
            return {...state, ...action.payload}
        },
        setProjectState: (state, action) => {
            return {...state, ...action.payload}
        }
    },
});

export const {
    setProjectsState,
    setProjectState
} = projectSlice.actions;

export const getProjectsData = ( cardlink ) => dispatch => {
    // axios.get(`https://uwbx85xxs4.execute-api.us-east-1.amazonaws.com/api/card/${cardlink}`)
    // .then(res => 
    //     dispatch(setProjectsState({...res.data}))
    // )
    // .catch(err => console.log(err))
}

export const getProjectData = ( cardlink ) => dispatch => {
    // axios.get(`https://uwbx85xxs4.execute-api.us-east-1.amazonaws.com/api/card/${cardlink}`)
    // .then(res => 
    //     dispatch(setProjectState({...res.data}))
    // )
    // .catch(err => console.log(err))
}

export const projectsState = state => state.projectState.projects;

export default projectSlice.reducer;