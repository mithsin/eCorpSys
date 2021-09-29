import React, { useState } from 'react';
import {MuiButton, MuiInputField} from 'Components/MUI';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import moment from 'moment';
import styles from './styles.module.scss';
import { v4 as uuidv4 } from 'uuid';

const InstallationEdit = ({setProject, project, title, list=[{}]}) => {
    const [formInputs, setFormInputs] = useState(list);
    const headTitles = [ "deliverable", "comopleted", "ready", "start", "end", "status" ];

    const formInputChange = (e, item) => {
        const newObj = {
            ...item,
            [e.target.name]: (e.target.type === 'checkbox' && e.target.checked) || e.target.value
        }
        const updateList = formInputs.map(list => list.id === item.id ? newObj : list);
        setFormInputs(updateList)
        setProject({
            ...project,
            installation: updateList
        })
    };
    const onClickAddLine = () => {
        setFormInputs(formInputs.concat(newObjLine))
    }
    const onClickRemoveLine = (id) => {
        setFormInputs(formInputs.filter(item => item.id !== id))
    }
    const newObjLine = {
        id: `submittles-${uuidv4()}`,
        deliverable: "",
        order: false,
        inProdtn: false,
        ship: false,
        dlvrd: false,
        status: "",
    }
    const inputField = [{
        type: 'text',
        defaultValue: 'deliverable',
        name: 'deliverable',
        label: 'deliverable'
    },{
        type: 'checkbox',
        defaultValue: 'comopleted',
        name: 'comopleted',
        label: 'comopleted'
    },{
        type: 'checkbox',
        defaultValue: 'ready',
        name: 'ready',
        label: 'ready'
    },{
        type: 'checkbox',
        defaultValue: 'start',
        name: 'start',
        label: 'start'
    },{
        type: 'checkbox',
        defaultValue: 'end',
        name: 'end',
        label: 'end'
    },{
        type: 'text',
        defaultValue: 'status',
        name: 'status',
        label: 'status'
    }]

    return(
        <div className="ProjectTableWrapper">
            <h2>{title}</h2>
            <table>
                <thead>
                    <tr>
                        {headTitles?.map((title, index)=>
                            <th key={`title-${index}`}><b>{title}</b></th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {formInputs?.map((item, index)=>
                        <tr key={`InstallationEdit-list-${index}`} className={styles.tbodyTr}>
                            {
                                inputField.map((inputList, index) => {
                                    return (
                                        <td key={`InstallationEdit-input-${index}`}>
                                            <MuiInputField
                                                bgColor="#fff"
                                                type={inputList.type}
                                                defaultValue={item?.[inputList.defaultValue]}
                                                name={inputList.name}
                                                label={inputList.label}
                                                onChange={(e)=> formInputChange(e, item) }/>
                                        </td>
                                    );
                                })
                            }
                            <td>
                                <RemoveCircle sx={{ color: "red" }} onClick={()=>onClickRemoveLine(item.id)}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className={styles.FlexWrap}>
                <AddCircle color="success" onClick={onClickAddLine}/>
            </div>
        </div>
    );
};

export default InstallationEdit;