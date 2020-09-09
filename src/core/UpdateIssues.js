import React,{useState,useEffect} from 'react';
import "../styles.css"
import { Link } from 'react-router-dom';
import { getIssue, updateIssue } from './helper/issueapicalls';


const UpdateIssues = ({match}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

   const preload = (issueId) => {
        getIssue(issueId).then((data)=>{
            //console.log(data);
            if(data.error){
                //console.log(data.error);
                setError(true);
            }else{
                //console.log(data.title);
                //console.log(data.desc);
                setTitle(data.title)
                setDesc(data.desc)
            }
        });
   };

   useEffect(() => {
       preload(match.params.issueId);
   },[])

    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-info mb-3" to="/">
                 Home
            </Link>
        </div>
    );

    const handleClick1 = (event) => {
        setError("");
        setTitle(event.target.value);
    };

    const handleClick2 = (event) => {
        setError("");
        setDesc(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);
        updateIssue(match.params.issueId,{title,desc})
        .then(data => {
            if(data.error){
                setError(true);
            }else {
                setError("");
                setSuccess(true);
                setTitle("");
                setDesc("");
            }
        });
    };

    const successMessage = () => {
        if(success){
            return <h4 className="text-success">Issue is updated successfully</h4>
        }
    };

    const warningMessage = () => {
      if(error){
          return <h4 className="text-danger">Failed to update the Issue</h4>
      }
  };

  const myIssueForm = () => (
    <form>
        <div className="form-group">
           <h1 className="lead">Enter the Issue</h1>
           <input type="text" 
           className="form-control my-3"
               autoFocus
               required
               onChange={handleClick1}
               placeholder="Title"
           />
           <h1 className="lead">Enter the Description</h1>
           <input type="text" 
           className="form-control my-3"
               autoFocus
               required
               onChange={handleClick2}
               placeholder="Description of the Issue"
           />
           <button onClick={onSubmit} className="btn btn-outline-info">Update Issue</button>
        </div>
    </form>
 );
    return (
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h1 className="display-4">Update Issue</h1>
                <p className="lead">Issue updating Page</p>
            </div>
                <div className="container p-4">
                <div className="row rounded">
                  <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {warningMessage()}
                    {myIssueForm()}
                    {goBack()}
                  </div>
                </div>
                </div>
         </div>
    );
};

export default UpdateIssues;
