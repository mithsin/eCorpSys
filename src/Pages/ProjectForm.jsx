import React, { useState } from 'react';
import {MuiButton, MuiInputField} from 'Components/MUI';
import { v4 as uuidv4 } from 'uuid';

const ProjectForm = () => {
    const [formInputs, setFormInputs] = useState({});

    // input box setting
    const inputSettings = [
        {
            type: "text",
            name: "projetTitle",
            placeholder: "Projet Title",
            required: true
        },{
            type: "text",
            name: "constructionManager", 
            placeholder: "Construction Manager"
        },{
            type: "text",
            name: "projectScope", 
            placeholder: "Project Scope"
        },{
            type: "date",
            name: "projectDate",
            placeholder: "Project Date",
            required: true
        },{
            type: "text",
            name: "subcontract", 
            placeholder: "Subcontract"
        },{
            type: "date",
            name: "subcontractDate", 
            placeholder: "Subcontract Date"
        },{
            type: "text",
            name: "updateBy", 
            placeholder: "Update By"
        }
    ];

    const formInputChange = (e) => {
        
        if (e.type === 'date'){
            setFormInputs({ 
                ...formInputs,
                [e.name]: e.value
            })
        } else {
            setFormInputs({ 
                ...formInputs,
                [e.target.name] : e.target.name === 'points' ? parseInt(e.target.value) : e.target.value
            })
        }
    };

    const onClickAddProject = () => {
        console.log('formInputs->: ', formInputs)
    };

    return(
        <div>
        {
            inputSettings.map((inputSetting, index)=>
                <MuiInputField
                    key={`${index}-inputsetting`}
                    bgColor="#fff"
                    type={inputSetting.type}
                    name={inputSetting.name}
                    label={inputSetting.placeholder}
                    {...(inputSetting.required && {required: inputSetting.required})}
                    onChange={ formInputChange }/>
            )
        }
            <MuiButton 
                bgColor="#fff"
                labelColor="#000"
                label="SUBMIT"
                onClick={ onClickAddProject }/>
        </div>
    );
};

export default ProjectForm;