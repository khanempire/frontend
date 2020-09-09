import React,{useState,useEffect} from 'react';
import "../styles.css";
import { Link } from 'react-router-dom';
import getIssues from './helper/coreapicalls';
import {deleteIssue} from './helper/issueapicalls';
import Pagination from './Pagination';
const ListOfIssues = () => {

    const [issues, setIssues] = useState([]);
    const [error, setError] = useState("");
   // const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(1);

    const loadAllIssues = () => {
        getIssues().then(data=>{
            console.log(data);
            if(data.error){
                setError(data.error);
            }else{
                setIssues(data);
            }
        });
    };
    useEffect(() => {
        loadAllIssues();
     }, [])
    
     const deleteThisIssue = (issueId) => {
        deleteIssue(issueId).then(data=>{
            if(data.error){
                console.log(data.error);
            }else{
                loadAllIssues();
            }
        });
    };
    const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = issues.slice(indexOfFirstPost,indexOfLastPost);
   const paginate = pageNumber =>setCurrentPage(pageNumber);
    return (
            <div className="">
              <h1 className="text-center text-warning">
                Available Issues 
                <span className="float-right mr-3">
                  <Link to="/create/newissues">
                      Create Issue
                  </Link>
                </span>
              </h1>
              <div className="">
                  {currentPosts.map((issue,index)=>{
                      return (
                          <div key={index} className="mb-4 bg-dark pb-2">
                             <h2 className="ml-4">
                             <span className="pr-3">{index+1}.</span>
                              <Link className="text-white" to={`/issue/${issue._id}`}>
                                {issue.title}
                              </Link>
                              </h2>
                              <p className="ml-4 pl-5">{issue.desc}</p>
                              <button onClick={() => {
                                 deleteThisIssue(issue._id)
                                 }} className="btn btn-danger ml-5">
                                  Delete
                              </button>
                              <Link
                                className="btn btn-success ml-5"
                                 to={`/update/issues/${issue._id}`}
                              >
                              <span className="">Update</span>
                              </Link>
                          </div>
                      );
                  })}
              </div>
              <Pagination postsPerPage={postsPerPage} totalPosts={issues.length} paginate={paginate} />
            </div>
    );
};

export default ListOfIssues;
