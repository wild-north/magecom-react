import React from 'react';
import { HomePage } from './pages/home';
import { Tasks } from './pages/tasks';
import { TaskDescription } from './pages/task-description';
import { TaskEdit } from './pages/task-edit';

import { Switch, Route } from 'react-router-dom';

export const MainContent = ({ tasks, toggleDone, saveTask }) => (
    <Switch>
        <Route path="/"
               exact
               component={ HomePage }
        />
        <Route path="/category/:id"
               exact
               render={ () => <Tasks tasks={ tasks }/> }
        />
        <Route path="/category/:categoryId/task/:taskId"
               exact
               render={ props => <TaskDescription { ...props }
                                                  tasks={ tasks }
                                                  toggleDone={ toggleDone }
               /> }
        />
        <Route path="/category/:categoryId/task/:taskId/edit"
               render={ props => <TaskEdit { ...props }
                                           tasks={ tasks }
                                           saveTask={ saveTask }/> }
        />
    </Switch>
);