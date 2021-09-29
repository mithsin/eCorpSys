import { createSlice } from '@reduxjs/toolkit';
import { ProjectsData } from  'MockData';
import axios from 'axios';

export const projectSlice = createSlice({
    name: 'projectState',
    initialState: {
        projects: []
    },
    reducers: {
        setProjectsState: (state, action) => {
            return {...state, projects: [...action.payload]}
        },
        setProjectState: (state, action) => {
            return {...state, projects: [action.payload]}
        }
    },
});

export const {
    setProjectsState,
    setProjectState
} = projectSlice.actions;

export const getProjectsState = ( ) => dispatch => {
    axios.get(`https://x720g3g70f.execute-api.us-east-1.amazonaws.com/api/projects`)
    .then(res => {
        dispatch(setProjectsState(res.data))
    })
    .catch(err => console.log(err))
}

export const getProjectData = ( projectLink ) => dispatch => {
    console.log('trigger getProjectData dispatch and projectlink: ', projectLink)
    
    axios.get(`https://x720g3g70f.execute-api.us-east-1.amazonaws.com/api/project?projectId=${projectLink}`)
    .then(res => {
        dispatch(setProjectState(res.data))
        return(res.data);
    })
    .catch(err => console.log(err))
}

export const updateProjectData = ( project ) => dispatch => {
    console.log('project-->: ', {update: project})
    axios.put(`https://x720g3g70f.execute-api.us-east-1.amazonaws.com/api/project`, {update: project})
    .then(res => {
        dispatch(setProjectState(res.data))
        return(res.data)
    })
    .catch(err => console.log(err))
}

export const createNewProject = ( newProject ) => dispatch => {
    axios.put(`https://x720g3g70f.execute-api.us-east-1.amazonaws.com/api/project`, newProject)
    .then(res => 
        dispatch(setProjectState(res.data))
    )
    .catch(err => console.log(err))
}

export const projectsState = state => state.projectState.projects;

export default projectSlice.reducer;