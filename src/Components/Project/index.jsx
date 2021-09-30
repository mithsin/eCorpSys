import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Edit, Backup } from '@mui/icons-material';
import { projectsState, getProjectData, updateProjectData } from 'States/projectSlice';
import ProjectHeader from 'Components/ProjectHeader';
import SubmittalsTable from 'Components/SubmittalsTable';
import MaterialTable from 'Components/MaterialTable';
import InstallationTable from 'Components/InstallationTable';
import { submittalsSetting, materialSetting, installationSetting } from './formatSetting';

import ProjectTableEdit from 'Components/ProjectTableEdit';

import styles from './styles.module.scss';

const Project = () => {
    const dispatch = useDispatch();
    const projectDataState = useSelector(projectsState);
    const {projectId} = useParams();
    const [project, setProject] = useState();
    const [edit, setEdit] = useState(false);
    useEffect(()=>{
        if(!project){
            (projectDataState && projectDataState.length > 0)
                ? setProject(projectDataState.find(arr => arr.projectId === projectId)) 
                : setProject(dispatch(getProjectData(projectId)))
        }
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
                ? <SubmittalsTable edit={edit} title="SUBMITTALS" setProject={setProject} project={project} list={project?.submittals}/> 
                : <ProjectTableEdit 
                    edit={edit}
                    title="SUBMITTALS" 
                    setProject={setProject}
                    newObjLine={submittalsSetting.newObjLine}
                    inputField={submittalsSetting.inputField}
                    headTitles={submittalsSetting.headTitles}
                    newKey='submittals'
                    project={project} 
                    list={project?.submittals}/>}
            {project?.material && !edit 
                ? <MaterialTable edit={edit} title="MATERIAL" setProject={setProject} project={project} list={project?.material}/> 
                : <ProjectTableEdit
                    edit={edit}
                    title="MATERIAL"
                    setProject={setProject}
                    newObjLine={materialSetting.newObjLine}
                    inputField={materialSetting.inputField}
                    headTitles={materialSetting.headTitles}
                    newKey='material'
                    project={project}
                    list={project?.material}/>}
            {project?.installation && !edit 
                ? <InstallationTable edit={edit} title="INSTALLATION" setProject={setProject} project={project} list={project?.installation}/> 
                : <ProjectTableEdit
                    edit={edit}
                    title="INSTALLATION"
                    setProject={setProject}
                    newObjLine={installationSetting.newObjLine}
                    inputField={installationSetting.inputField}
                    headTitles={installationSetting.headTitles}
                    newKey='installation'
                    project={project}
                    list={project?.installation}/>}
        </div>
    );
};

export default Project