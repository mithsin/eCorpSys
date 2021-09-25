import React, { useState } from 'react';
import { capitalString, tableFormatter } from 'utils/util';
import {MuiButton, MuiInputField} from 'Components/MUI';
import './styles.scss';

const ProjectTableEdit = ({title, list=[{}]}) => {
    const allKeys = Object.keys(list[0]);
    const [formInputs, setFormInputs] = useState(list);

    const formInputChange = (e, item, itemId) => {
        const newObj = {
            ...item,
            [e.target.name]: e.target.value
        }
        // console.log('item-->: ', item)
        // console.log('formInputs-->: ', formInputs)
        console.log('newObj-->: ', newObj)
        // console.log('index-->: ', index)
        console.log('id->: ', itemId)

        const updateList = formInputs.map(list => list.id === itemId ? newObj : list);
        console.log('updateList--->: ', updateList)
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
                            title !== "id" && <th key={`title-${index}`}><b>{capitalString(title)}</b></th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {list?.map((item, index)=>{
                        const itemList = Object.entries(item);
                        return <tr key={`list-${index}`} className="tbodyTr">
                            {(itemList.filter(item=> item[0] !== "id")).map((val, idx) => {
                                const newVal = tableFormatter(val);
                                return <td key={`val-${idx}`}>
                                    <MuiInputField
                                            key={`${index}-inputsetting`}
                                            bgColor="#fff"
                                            type='text'
                                            defaultValue={val[1]}
                                            name={val[0]}
                                            label={val[0]}
                                            onChange={(e)=> formInputChange(e, item, itemList.find(item => item[0] === "id")[1]) }/>
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