import {API} from "../../Backend";


export const createIssue = (issue) => {
    return fetch(`${API}/issues/create`,{
       method: "POST",
       headers: {
           Accept : "application/json",
          "Content-Type":"application/json"
       },
       body: JSON.stringify(issue)
    }).then((response)=>{
        return response.json()
    }).catch(err=>console.log(err))
};

export const deleteIssue = (issueId) => {
    return fetch(`${API}/delete/issues/${issueId}`,{
       method: "DELETE",
       headers: {
           Accept : "application/json"
       }
    }).then((response)=>{
        return response.json()
    }).catch(err=>console.log(err))
};


export const getIssue = (issueId) => {
    return fetch(`${API}/issues/${issueId}`,{
        method: "GET"
    }).then((response)=>{
       return response.json()
   }).catch(err=>console.log(err))
};

export const updateIssue = (issueId,issue) => {
    return fetch(`${API}/update/issues/${issueId}`,{
       method: "PUT",
       headers: {
           Accept : "application/json",
           "Content-Type":"application/json"
       },
       body: JSON.stringify(issue)
    }).then((response)=>{
        return response.json()
    }).catch(err=>console.log(err))
};