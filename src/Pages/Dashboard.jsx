import React from 'react';
import { useSelector } from 'react-redux';
import { projectState } from 'States/projectSlice';
import ProjectHeader from 'Components/ProjectHeader';
import ProjectTable from 'Components/ProjectTable';
import './styles.scss';



const Dashboard = () => {
    const projectDataState = useSelector(projectState);
    const currentProject = projectDataState[0];
    console.log('projectDataState--> ', projectDataState)
    return(
        <div>
            <ProjectHeader {...currentProject}/>
            {currentProject.submittals && <ProjectTable title="SUBMITTALS" list={currentProject.submittals}/>}
            {currentProject.material && <ProjectTable title="MATERIAL" list={currentProject.material}/>}
            {currentProject.installation && <ProjectTable title="INSTALLATION" list={currentProject.installation}/>}
        </div>
    );
};

export default Dashboard