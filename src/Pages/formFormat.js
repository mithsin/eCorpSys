// input box setting
export const inputSettings = [
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

export const inputSubmittals = [{
    deliverable: "",
    proData: true,
    shopDwg: true,
    eng: true,
    sample: true,
    status: [{
        date: "",
        message: ""
    }]
}];