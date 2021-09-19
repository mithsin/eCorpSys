import React from 'react';
import { useSelector } from 'react-redux';
import { projectsState } from 'States/projectSlice';
import { useHistory } from 'react-router-dom'
import './styles.scss';



const Dashboard = () => {
    const projectDataState = useSelector(projectsState);
    const history = useHistory();
    return(
        <div>
            <h1>Hello</h1>
           {
               projectDataState.map(project =>
                <div 
                    onClick={()=> 
                        (history.push(`/${project.projectId}`))
                }>{project.projetTitle}</div>)
           }
        </div>
    );
};

export default Dashboard