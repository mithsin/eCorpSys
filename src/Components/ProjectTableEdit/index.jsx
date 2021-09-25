import React, { useState } from 'react';
import { capitalString, tableFormatter } from 'utils/util';
import {MuiButton, MuiInputField} from 'Components/MUI';
import './styles.scss';

const ProjectTableEdit = ({title, list=[{}]}) => {
    const allKeys = Object.keys(list[0]);
    const [formInputs, setFormInputs] = useState(list);

    const formInputChange = (e, item, index) => {
        const newObj = {
            ...item,
            [e.target.name]: e.target.value
        }
        console.log('item-->: ', item)
        console.log('formInputs-->: ', formInputs)
        console.log('newObj-->: ', newObj)
        console.log('index-->: ', index)
        const updateList = formInputs.splice(index, 1, newObj)
        setFormInputs(updateList)
    };
    const onClickAddProject = () => {
        console.log('formInputs->: ', formInputs)
    };
    return(
        <div className="ProjectTableWrapper">
            <h2>{title}</h2>
            <MuiButton 
                bgColor="#fff"
                labelColor="#000"
                label="SUBMIT"
                onClick={ onClickAddProject }/>
            <table>
                <thead>
                    <tr>
                        {allKeys?.map((title, index)=>
                            <th key={`title-${index}`}><b>{capitalString(title)}</b></th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {list?.map((item, index)=>{
                        const itemList = Object.entries(item);
                        return <tr key={`list-${index}`} className="tbodyTr">
                            {itemList.map((val, idx) => {
                                const newVal = tableFormatter(val);
                                return <td key={`val-${idx}`}>
                                    <MuiInputField
                                            key={`${index}-inputsetting`}
                                            bgColor="#fff"
                                            type='text'
                                            defaultValue={newVal?.type === "array" 
                                                ? newVal?.value.map(item => Object.values(item).join(' ')).join(' ')
                                                : val[1]}
                                            name={val[0]}
                                            label={val[0]}
                                            onChange={(e)=> formInputChange(e, item, index) }/>
                                </td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectTableEdit;