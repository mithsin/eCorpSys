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

    // Mock Data: 
    // dispatch(setProjectsState(ProjectsData))
}

export const getProjectData = ( projectLink ) => dispatch => {
    axios.get(`https://x720g3g70f.execute-api.us-east-1.amazonaws.com/api/project?projectId=${projectLink}`)
    .then(res => {
        dispatch(setProjectState(res.data))
        return(res.data);
    })
    .catch(err => console.log(err))
    
    // Mock Data: 
    // dispatch(setProjectState(ProjectsData[0]))
}

export const updateProjectData = ( project ) => dispatch => {
    axios.put(`https://x720g3g70f.execute-api.us-east-1.amazonaws.com/api/project`, {update: project})
    .then(res => {
        dispatch(setProjectState(project))
        return(res.data)
    })
    .catch(err => console.log(err))

    // console.log('updateprojectdata-->: ', {update: project})
}

export const createNewProject = ( newProject ) => dispatch => {
    axios.post(`https://x720g3g70f.execute-api.us-east-1.amazonaws.com/api/project`, newProject)
    .then(res => 
        dispatch(setProjectState(res.data))
    )
    .catch(err => console.log(err))
}

export const projectsState = state => state.projectState.projects;

export default projectSlice.reducer;