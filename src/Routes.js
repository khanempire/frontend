import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ListOfIssues from './core/ListOfIssues';
import AddIssues from './core/AddIssues';
import UpdateIssues from './core/UpdateIssues';
import ShowIssue from './core/ShowIssue';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={ListOfIssues}/>
              <Route path="/create/newissues" exact component={AddIssues}/>
              <Route path="/update/issues/:issueId" exact component={UpdateIssues}/>
              <Route path="/issue/:issueId" exact component={ShowIssue}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
