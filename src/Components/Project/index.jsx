import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { projectsState } from 'States/projectSlice';
import ProjectHeader from 'Components/ProjectHeader';
import ProjectTable from 'Components/ProjectTable';
import './styles.scss';



const Project = () => {
    const projectDataState = useSelector(projectsState);
    const {projectId} = useParams();
    const [project, setProject] = useState();
    useEffect(()=>{
        projectDataState ? setProject(projectDataState.find(arr => arr.projectId === projectId)) : setProject('wait')
    },[]);
    return(
        <div>
            <h1>{projectId}</h1>
            <ProjectHeader {...project}/>
            {/* {currentProject.submittals && <ProjectTable title="SUBMITTALS" list={currentProject.submittals}/>} */}
            {/* {currentProject.material && <ProjectTable title="MATERIAL" list={currentProject.material}/>} */}
            {/* {currentProject.installation && <ProjectTable title="INSTALLATION" list={currentProject.installation}/>} */}
        </div>
    );
};

export default Project