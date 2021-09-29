import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { projectsState, getProjectsState } from 'States/projectSlice';
import { useHistory } from 'react-router-dom'
import styles from './styles.module.scss';

const Dashboard = () => {
    const dispatch = useDispatch();
    const projectDataState = useSelector(projectsState);
    const history = useHistory();

    useEffect(()=>{
       dispatch(getProjectsState())
    },[])

    return(
        <div>
            <h1>Hello</h1>
           {
               projectDataState.map(project =>
                <div 
                    className={styles.ProjectWrapper}
                    onClick={()=> 
                        (history.push(`/${project.projectId}`))
                }>{project.projetTitle}</div>)
           }
        </div>
    );
};

export default Dashboard