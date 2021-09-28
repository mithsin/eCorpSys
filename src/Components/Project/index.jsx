import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { projectsState, getProjectData } from 'States/projectSlice';
import ProjectHeader from 'Components/ProjectHeader';
import ProjectTable from 'Components/ProjectTable';

import SubmittalsTable from 'Components/SubmittalsTable';
import SubmittlesEdit from 'Components/SubmittlesEdit';
import './styles.scss';

const Project = () => {
    const dispatch = useDispatch();
    const projectDataState = useSelector(projectsState);
    const {projectId} = useParams();
    const [project, setProject] = useState();
    const [edit, setEdit] = useState(false);
    useEffect(()=>{
        project 
            ? setProject(projectDataState.find(arr => arr.projectId === projectId)) 
            : setProject(dispatch(getProjectData(projectId)))
    },[]);
    return(
        <div>
            <h1>{projectId}</h1>
            <ProjectHeader {...project}/>
            <MuiButton 
                    bgColor="#fff"
                    labelColor="#000"
                    label="EDIT"
                    onClick={ ()=>setEdit(!edit) }/>
            {project?.submittals && !edit 
                ? <SubmittalsTable title="SUBMITTALS" list={project?.submittals}/> 
                : <SubmittlesEdit title="SUBMITTALS" list={project?.submittals}/>}
            {project?.material && <ProjectTable title="MATERIAL" list={project?.material}/>}
            {project?.installation && <ProjectTable title="INSTALLATION" list={project?.installation}/>}
        </div>
    );
};

export default Project