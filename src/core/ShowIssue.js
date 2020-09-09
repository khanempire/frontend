import React,{useState,useEffect} from 'react';
import "../styles.css"
import { Link } from 'react-router-dom';
import { getIssue } from './helper/issueapicalls';

const ShowIssue = ({match}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const preload = (issueId) => {
        getIssue(issueId).then((data)=>{
            //console.log(data);
            if(data.error){
                //console.log(data.error);
                return data.error;
            }else{
                //console.log(data.title);
                //console.log(data.desc);
                setTitle(data.title);
                setDesc(data.desc);
            }
        });
   };


   useEffect(() => {
    preload(match.params.issueId);
});

 const goBack = () => (
     <div className="mt-5">
         <Link className="btn btn-sm btn-info mb-3" to="/">
              Home
         </Link>
     </div>
 );

    return (
        <div className="container-fluid">
           <h1 className="ml-3 mb-3 text-warning">{title}</h1>
           <p className="ml-5">{desc}</p>
            {goBack()}
        </div>
    )
}


export default ShowIssue;
