import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Edit, Backup } from '@mui/icons-material';
import { projectsState, getProjectData, updateProjectData } from 'States/projectSlice';
import ProjectHeader from 'Components/ProjectHeader';
import SubmittalsTable from 'Components/SubmittalsTable';
import SubmittalsEdit from 'Components/SubmittalsEdit';
import MaterialTable from 'Components/MaterialTable';
import MaterialEdit from 'Components/MaterialEdit';
import InstallationTable from 'Components/InstallationTable';
import InstallationEdit from 'Components/InstallationEdit';
import styles from './styles.module.scss';

const Project = () => {
    const dispatch = useDispatch();
    const projectDataState = useSelector(projectsState);
    const {projectId} = useParams();
    const [project, setProject] = useState();
    const [edit, setEdit] = useState(false);
    useEffect(()=>{
        (projectDataState && projectDataState.length > 0)
            ? setProject(projectDataState.find(arr => arr.projectId === projectId)) 
            : setProject(dispatch(getProjectData(projectId)))
    },[projectDataState]);
    const onClickUpdateProject = () => {
        dispatch(updateProjectData(project))
    }
    return(
        <div>
            <h1>{projectId}</h1>
            <ProjectHeader {...project}/>
            <div className={styles.ButtonWrapper}>
                <div
                    className={styles.EditWrapper}
                    onClick={ ()=>setEdit(!edit) }>
                        Edit
                    <Edit color="success"/>
                </div>
                <div
                    className={styles.EditWrapper}
                    onClick={ onClickUpdateProject }>
                        Save
                    <Backup color="success"/>
                </div>
            </div>
            {project?.submittals && !edit 
                ? <SubmittalsTable title="SUBMITTALS" setProject={setProject} project={project} list={project?.submittals}/> 
                : <SubmittalsEdit title="SUBMITTALS" setProject={setProject} project={project} list={project?.submittals}/>}
            {project?.material && !edit 
                ? <MaterialTable title="MATERIAL" setProject={setProject} project={project} list={project?.material}/> 
                : <MaterialEdit title="MATERIAL" setProject={setProject} project={project} list={project?.material}/>}
            {project?.installation && !edit 
                ? <InstallationTable title="INSTALLATION" setProject={setProject} project={project} list={project?.installation}/> 
                : <InstallationEdit title="INSTALLATION" setProject={setProject} project={project} list={project?.installation}/>}
        </div>
    );
};

export default Project