import React,{useState} from 'react';
import "../styles.css"
import { Link } from 'react-router-dom';
import { createIssue } from './helper/issueapicalls';


const AddIssues = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


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
        createIssue({title,desc})
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
            return <h4 className="text-success">New Issue is created successfully</h4>
        }
    };

    const warningMessage = () => {
      if(error){
          return <h4 className="text-warning">Failed to create a new Issue</h4>
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
           <button onClick={onSubmit} className="btn btn-outline-info">Create Issue</button>
        </div>
    </form>
 );
    return (
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h1 className="display-4">Create a new Issue</h1>
                <p className="lead">Issue Page</p>
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

export default AddIssues;
