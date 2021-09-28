import React, { useState } from 'react';
import {MuiButton, MuiInputField} from 'Components/MUI';
import moment from 'moment';
import styles from './styles.module.scss';
import { v4 as uuidv4 } from 'uuid';

const SubmittlesEdit = ({title, list=[{}]}) => {
    const [formInputs, setFormInputs] = useState(list);
    const headTitles = [ 'Deliverable', 'Pro Data', 'Shop Dwg', 'Eng', 'Sample', 'Status' ];
    // || ( e.target.name === 'status' && `${item?.status} \n ${moment().format('L')}: ${e.target.value}`)
    const formInputChange = (e, item) => {
        const newObj = {
            ...item,
            [e.target.name]: (e.target.type === 'checkbox' && e.target.checked) || e.target.value
        }
        const updateList = formInputs.map(list => list.id === item.id ? newObj : list);
        setFormInputs(updateList)
    };
    const onClickUpdateProject = () => {
        console.log('formInputs->: ', formInputs)
    };
    const onClickAddLine = () => {
        const newObjLine = {
            id: `submittles-${uuidv4()}`,
            deliverable: "",
            eng: false,
            proData: false,
            sample: false,
            shopDwg: false,
            status: "",
        }
        setFormInputs(formInputs.concat(newObjLine))
    }
    
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
                        <tr key={`list-${index}`} className={styles.tbodyTr}>
                            <td>
                                <MuiInputField
                                    bgColor="#fff"
                                    type='text'
                                    defaultValue={item.deliverable}
                                    name={'deliverable'}
                                    label={'deliverable'}
                                    onChange={(e)=> formInputChange(e, item) }/>
                            </td>
                            <td>
                                <MuiInputField
                                    bgColor="#fff"
                                    type='checkbox'
                                    defaultValue={item.proData}
                                    name={'proData'}
                                    label={'proData'}
                                    onChange={(e)=> formInputChange(e, item) }/>
                            </td>
                            <td>
                                <MuiInputField
                                    bgColor="#fff"
                                    type='checkbox'
                                    defaultValue={item.shopDwg}
                                    name={'shopDwg'}
                                    label={'shopDwg'}
                                    onChange={(e)=> formInputChange(e, item) }/>
                            </td>
                            <td>
                                <MuiInputField
                                    bgColor="#fff"
                                    type='checkbox'
                                    defaultValue={item.eng}
                                    name={'eng'}
                                    label={'eng'}
                                    onChange={(e)=> formInputChange(e, item) }/>
                            </td>
                            <td>
                                <MuiInputField
                                    bgColor="#fff"
                                    type='checkbox'
                                    defaultValue={item.sample}
                                    name={'sample'}
                                    label={'sample'}
                                    onChange={(e)=> formInputChange(e, item) }/>
                            </td>
                            <td>
                                <div>{item.status}</div>
                                <MuiInputField
                                    bgColor="#fff"
                                    type='text'
                                    defaultValue={""}
                                    name={'status'}
                                    label={'message'}
                                    onChange={(e)=> formInputChange(e, item) }/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className={styles.FlexWrap}>
                <div className={styles.ButtonsWrap}>
                    <MuiButton 
                        bgColor="#00FF00"
                        labelColor="#000"
                        label="SUBMIT"
                        onClick={ onClickUpdateProject }/>
                    <MuiButton 
                        bgColor="#ADD8E6"
                        labelColor="#000"
                        label="add"
                        onClick={ onClickAddLine }/>
                </div>
            </div>
        </div>
    );
};

export default SubmittlesEdit;