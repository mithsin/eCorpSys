import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { projectsState } from 'States/projectSlice';
import ProjectHeader from 'Components/ProjectHeader';
import ProjectTable from 'Components/ProjectTable';
import ProjectTableEdit from 'Components/ProjectTableEdit';
import './styles.scss';



const Project = () => {
    const dispatch = useDispatch();
    const projectDataState = useSelector(projectsState);
    const {projectId} = useParams();
    const [project, setProject] = useState();
    const [edit, setEdit] = useState(false);
    useEffect(()=>{
        projectDataState ? setProject(projectDataState.find(arr => arr.projectId === projectId)) : setProject('wait')
    },[]);
    console.log(project)
    return(
        <div>
            <h1>{projectId}</h1>
            <ProjectHeader {...project}/>
            <button onClick={()=>setEdit(!edit)}>Edit</button>
            {project?.submittals && !edit 
                ? <ProjectTable title="SUBMITTALS" list={project?.submittals}/> 
                : <ProjectTableEdit title="SUBMITTALS" list={project?.submittals}/>}
            {project?.material && <ProjectTable title="MATERIAL" list={project?.material}/>}
            {project?.installation && <ProjectTable title="INSTALLATION" list={project?.installation}/>}
        </div>
    );
};

export default Project