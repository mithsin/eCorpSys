import React, { useState } from 'react';
import {MuiButton, MuiInputField} from 'Components/MUI';
import { v4 as uuidv4 } from 'uuid';
import {inputSettings, } from './formFormat';
import styles from './styles.module.scss';

const ProjectForm = () => {
    const [formInputs, setFormInputs] = useState({});
    const [inputSubmittals, setInputSubmittals] = useState(inputSubmittals)
    
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
        <div className={styles.ProjectFormWrapper}>
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