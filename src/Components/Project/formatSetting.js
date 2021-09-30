import { v4 as uuidv4 } from 'uuid';

export const submittalsHeadTitles = [ 'Deliverable', 'Pro Data', 'Shop Dwg', 'Eng', 'Sample', 'Status' ];
export const submittalsNewObjLine = {
    id: `submittals-${uuidv4()}`,
    deliverable: "",
    eng: false,
    proData: false,
    sample: false,
    shopDwg: false,
    status: "",
}
export const submittalsInputField = [{
    type: 'text',
    defaultValue: 'deliverable',
    name: 'deliverable',
    label: 'deliverable'
},{
    type: 'checkbox',
    defaultValue: 'proData',
    name: 'proData',
    label: 'proData'
},{
    type: 'checkbox',
    defaultValue: 'shopDwg',
    name: 'shopDwg',
    label: 'shopDwg'
},{
    type: 'checkbox',
    defaultValue: 'eng',
    name: 'eng',
    label: 'eng'
},{
    type: 'checkbox',
    defaultValue: 'sample',
    name: 'sample',
    label: 'sample'
},{
    type: 'text',
    defaultValue: 'status',
    name: 'status',
    label: 'status'
}]

export const materialHeadTitles = [ "deliverable", "order", "inProdtn", "ship", "dlvrd", "status" ];
export const materialNewObjLine = {
    id: `submittles-${uuidv4()}`,
    deliverable: "",
    order: false,
    inProdtn: false,
    ship: false,
    dlvrd: false,
    status: "",
}
export const materialInputField = [{
    type: 'text',
    defaultValue: 'deliverable',
    name: 'deliverable',
    label: 'deliverable'
},{
    type: 'checkbox',
    defaultValue: 'order',
    name: 'order',
    label: 'order'
},{
    type: 'checkbox',
    defaultValue: 'inProdtn',
    name: 'inProdtn',
    label: 'inProdtn'
},{
    type: 'checkbox',
    defaultValue: 'ship',
    name: 'ship',
    label: 'ship'
},{
    type: 'checkbox',
    defaultValue: 'dlvrd',
    name: 'dlvrd',
    label: 'dlvrd'
},{
    type: 'text',
    defaultValue: 'status',
    name: 'status',
    label: 'status'
}];

export const installationMaterialHeadTitles = [ "deliverable", "comopleted", "ready", "start", "end", "status" ];
export const installationNewObjLine = {
    id: `submittles-${uuidv4()}`,
    deliverable: "",
    order: false,
    inProdtn: false,
    ship: false,
    dlvrd: false,
    status: "",
}
export const installationInputField = [{
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

export const submittalsSetting = {
    headTitles: [ 'Deliverable', 'Pro Data', 'Shop Dwg', 'Eng', 'Sample', 'Status' ],
    newObjLine: {
        id: `submittals-${uuidv4()}`,
        deliverable: "",
        eng: false,
        proData: false,
        sample: false,
        shopDwg: false,
        status: "",
    },
    inputField: [{
        type: 'text',
        defaultValue: 'deliverable',
        name: 'deliverable',
        label: 'deliverable'
    },{
        type: 'checkbox',
        defaultValue: 'proData',
        name: 'proData',
        label: 'proData'
    },{
        type: 'checkbox',
        defaultValue: 'shopDwg',
        name: 'shopDwg',
        label: 'shopDwg'
    },{
        type: 'checkbox',
        defaultValue: 'eng',
        name: 'eng',
        label: 'eng'
    },{
        type: 'checkbox',
        defaultValue: 'sample',
        name: 'sample',
        label: 'sample'
    },{
        type: 'text',
        defaultValue: 'status',
        name: 'status',
        label: 'status'
    }]
};

export const materialSetting = {
    headTitles: [ "deliverable", "order", "inProdtn", "ship", "dlvrd", "status" ],
    newObjLine: {
        id: `submittles-${uuidv4()}`,
        deliverable: "",
        order: false,
        inProdtn: false,
        ship: false,
        dlvrd: false,
        status: "",
    },
    inputField: [{
        type: 'text',
        defaultValue: 'deliverable',
        name: 'deliverable',
        label: 'deliverable'
    },{
        type: 'checkbox',
        defaultValue: 'order',
        name: 'order',
        label: 'order'
    },{
        type: 'checkbox',
        defaultValue: 'inProdtn',
        name: 'inProdtn',
        label: 'inProdtn'
    },{
        type: 'checkbox',
        defaultValue: 'ship',
        name: 'ship',
        label: 'ship'
    },{
        type: 'checkbox',
        defaultValue: 'dlvrd',
        name: 'dlvrd',
        label: 'dlvrd'
    },{
        type: 'text',
        defaultValue: 'status',
        name: 'status',
        label: 'status'
    }]
};

export const installationSetting = {
    headTitles: [ "deliverable", "comopleted", "ready", "start", "end", "status" ],
    newObjLine: {
        id: `submittles-${uuidv4()}`,
        deliverable: "",
        order: false,
        inProdtn: false,
        ship: false,
        dlvrd: false,
        status: "",
    },
    inputField: [{
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
};