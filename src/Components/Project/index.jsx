import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Edit, Backup } from '@mui/icons-material';
import { projectsState, getProjectData, updateProjectData } from 'States/projectSlice';
import ProjectHeader from 'Components/ProjectHeader';
import { submittalsSetting, materialSetting, installationSetting } from './formatSetting';
import { isSignIn } from 'States/userSlice';
import { userLogout } from 'States/cognitoSlice';

import ProjectTable from 'Components/ProjectTable';
import ProjectTableEdit from 'Components/ProjectTableEdit';

import styles from './styles.module.scss';

const Project = () => {
    const dispatch = useDispatch();
    const userSignIn = useSelector(isSignIn);
    const projectDataState = useSelector(projectsState);
    const {projectId} = useParams();
    const [project, setProject] = useState();
    const [edit, setEdit] = useState(false);
    const [inputChanged, setInputChanged] = useState(false);
    useEffect(()=>{
        if(!project){
            (projectDataState && projectDataState.length > 0)
                ? setProject(projectDataState.find(arr => arr.projectId === projectId)) 
                : setProject(dispatch(getProjectData(projectId)))
        }
    },[projectDataState]);
 
    const onClickUpdateProject = () => {
        setInputChanged(false)
        dispatch(updateProjectData(project))
    }
    return(
        <div>
            <div>
                <button onClick={dispatch(userLogout())}>logout</button>
            </div>
            {userSignIn && <a style={{"float": "left", "margin": "1rem"}} href='/'>back</a>}
            <ProjectHeader {...project}/>
            {userSignIn && <div className={styles.ButtonWrapper}>
                <div
                    className={styles.EditWrapper}
                    onClick={ ()=>setEdit(!edit) }>
                        Edit
                    <Edit color="success"/>
                </div>
                {edit && <div
                    disabled={inputChanged}
                    className={inputChanged ? styles.EditWrapper : styles.EditDisabled}
                    onClick={ inputChanged ? onClickUpdateProject : null }>
                        Save
                    <Backup color="success"/>
                </div>}
            </div>}
            {project?.submittals && !edit 
                ? <ProjectTable 
                    newKey='submittals'
                    headTitles={submittalsSetting.headTitles}
                    title="SUBMITTALS" 
                    list={project?.submittals}/> 
                : userSignIn && <ProjectTableEdit 
                    edit={edit}
                    setEdit={setEdit}
                    title="SUBMITTALS" 
                    setProject={setProject}
                    setInputChanged={setInputChanged}
                    newObjLine={submittalsSetting.newObjLine}
                    inputField={submittalsSetting.inputField}
                    headTitles={submittalsSetting.headTitles}
                    newKey='submittals'
                    project={project} 
                    list={project?.submittals}/>}
            {project?.material && !edit 
                ? <ProjectTable 
                    newKey='material'
                    headTitles={materialSetting.headTitles}
                    title="MATERIAL"
                    list={project?.material}/> 
                : userSignIn && <ProjectTableEdit
                    edit={edit}
                    setEdit={setEdit}
                    setProject={setProject}
                    project={project}
                    setInputChanged={setInputChanged}
                    newObjLine={materialSetting.newObjLine}
                    inputField={materialSetting.inputField}
                    newKey='material'
                    headTitles={materialSetting.headTitles}
                    title="MATERIAL"
                    list={project?.material}/>}
            {project?.installation && !edit 
                ? <ProjectTable 
                    newKey='installation'
                    headTitles={installationSetting.headTitles}
                    title="INSTALLATION"
                    list={project?.installation}/> 
                : userSignIn && <ProjectTableEdit
                    edit={edit}
                    setEdit={setEdit}
                    setProject={setProject}
                    project={project}
                    setInputChanged={setInputChanged}
                    newObjLine={installationSetting.newObjLine}
                    inputField={installationSetting.inputField}
                    newKey='installation'
                    headTitles={installationSetting.headTitles}
                    title="INSTALLATION"
                    list={project?.installation}/>}
        </div>
    );
};

export default Project