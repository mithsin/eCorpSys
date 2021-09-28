import { createSlice } from '@reduxjs/toolkit';
import { ProjectsData } from  'MockData';
import axios from 'axios';

export const projectSlice = createSlice({
    name: 'projectState',
    initialState: {
        projects: [{}]
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

export const getProjectsData = ( ) => dispatch => {
    console.log('getProjectsData')
    axios.get(`https://x720g3g70f.execute-api.us-east-1.amazonaws.com/api/projects`)
    .then(res => {
        console.log('res-->: ', res.data);
        dispatch(setProjectsState(res.data))
    })
    .catch(err => console.log(err))
}

export const getProjectData = ( projectLink ) => dispatch => {
    axios.get(`https://x720g3g70f.execute-api.us-east-1.amazonaws.com/api/project??projectId=${projectLink}`)
    .then(res => 
        dispatch(setProjectState(res.data))
    )
    .catch(err => console.log(err))
}

export const projectsState = state => state.projectState.projects;

export default projectSlice.reducer;