import React from "react";
import './styles.scss';

const ProjectHeader = (props) => {
    const {
        projetTitle,
        constructionManager,
        projectScope,
        projectDate,
        subcontract,
        subcontractDate,
        updateBy,
    } = props;
    return(
        <div>
            <h1>{props.projetTitle}</h1>
            <div className="HeaderWrapper">
                <span className="ProjectList"><b>Projet Title:</b>{projetTitle}</span>
                <span className="ProjectList"><b>Construction Manager:</b>{constructionManager}</span>
                <span className="ProjectList"><b>Project Scope:</b>{projectScope}</span>
                <span className="ProjectList"><b>Project Date:</b>{projectDate}</span>
                <span className="ProjectList"><b>Subcontract:</b>{subcontract}</span>
                <span className="ProjectList"><b>Subcontract Date:</b>{subcontractDate}</span>
                <span className="ProjectList"><b>Update By:</b>{updateBy}</span>
            </div>
        </div>
    );
};

export default ProjectHeader;