import React, { useState } from 'react';
import {MuiButton, MuiInputField} from 'Components/MUI';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createNewProject } from 'States/projectSlice';
import moment from 'moment';
import { inputSettings, } from './formFormat';
import styles from './styles.module.scss';

const ProjectForm = () => {
    const dispatch = useDispatch();
    const [formInputs, setFormInputs] = useState({});
    
    const formInputChange = (e) => {
        
        if (e.type === 'date'){
            setFormInputs({ 
                ...formInputs,
                [e.name]: moment(e.value).format('L')
            })
        } else {
            setFormInputs({ 
                ...formInputs,
                [e.target.name] : e.target.name === 'points' ? parseInt(e.target.value) : e.target.value
            })
        }
    };

    const onClickAddProject = () => {
        dispatch(createNewProject({...formInputs, projectId: `project-${uuidv4()}`}))
    };
    return(
        <div className={styles.ProjectFormWrapper}>
            <h1>New Project Form</h1>
            <div className={styles.InputWrapper}>
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
            </div>
            <MuiButton 
                props={{
                    bgColor: "#4bb543",
                    hbgColor: "#90ee90",
                    labelColor: "#000",
                }}
                label="CREATE PROJECT"
                onClick={ onClickAddProject }/>
        </div>
    );
};

export default ProjectForm;