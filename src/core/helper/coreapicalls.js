import { API } from "../../Backend";
const getIssues = () => {
    return fetch(`${API}/issues`,{
        method: "GET"
    }).then(response=>{
        return response.json();
    }).catch(err=>console.log(err));
};

export default getIssues;