import React, { useState } from 'react';
import PopupMessage from 'Components/PopupMessage';
import { Check, Close } from '@mui/icons-material';
import MobileTable from './MobileTable';
import useCurrentWidth from 'hooks/useCurrentWidth';
import styles from './styles.module.scss';

const ProjectTable = ({newKey, headTitles, title, list=[{}]}) => {
    const { MOBILE_VIEW } = useCurrentWidth();
    const [showMessage, setShowMessage] = useState(false);
    const [viewItem, setViewItem] = useState();
    const CategoryComponent = ({item, newKey}) => {
        return(
            newKey === 'submittals' && <>
                <td>{item?.proData ? <Check color="success"/> : <Close color="error"/>}</td>
                <td>{item?.shopDwg ? <Check color="success"/> : <Close color="error"/>}</td>
                <td>{item?.eng ? <Check color="success"/> : <Close color="error"/>}</td>
                <td>{item?.sample ? <Check color="success"/> : <Close color="error"/>}</td>
            </> ||
            newKey === 'material' && <>
                <td>{item?.order ? <Check color="success"/> : <Close color="error"/>}</td>
                <td>{item?.inProdtn ? <Check color="success"/> : <Close color="error"/>}</td>
                <td>{item?.ship ? <Check color="success"/> : <Close color="error"/>}</td>
                <td>{item?.dlvrd ? <Check color="success"/> : <Close color="error"/>}</td>
            </> ||
            newKey === 'installation' && <>
                <td>{item?.comopleted ? <Check color="success"/> : <Close color="error"/>}</td>
                <td>{item?.ready ? <Check color="success"/> : <Close color="error"/>}</td>
                <td>{item?.start ? <Check color="success"/> : <Close color="error"/>}</td>
                <td>{item?.end ? <Check color="success"/> : <Close color="error"/>}</td>
            </>
        );
    };

    return(
        <div className={styles.ProjectTableWrapper}>
            {showMessage
             ? <PopupMessage 
                setShowMessage={setShowMessage}
                viewItem={viewItem}/>
             : 
                MOBILE_VIEW 
                    ? <>
                        <h2>{title}</h2>
                        {list?.map((item, index)=> <MobileTable key={`MobileTable-${index}`} 
                            setShowMessage={setShowMessage}
                            showMessage={showMessage}
                            setViewItem={setViewItem}
                            item={item}/>)}
                    </>
                    : <>
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
                            {list?.map((item, index)=>
                                <tr key={`list-${index}`} className={styles.tbodyTr}>
                                    <td>{item.deliverable}</td>
                                    <CategoryComponent newKey={newKey} item={item} />
                                    <td key={`status-view-${index}`}>
                                        {item?.status && item?.status.split('\n')[0]}
                                        <br />
                                        <button onClick={()=>{
                                            setShowMessage(!showMessage)
                                            setViewItem(item)
                                            }}>View History</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            }
        </div>
    );
};


export default ProjectTable;