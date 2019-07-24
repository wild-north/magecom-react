import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';

export const TaskDescription = (props) => {
    const { taskId, categoryId } = get(props, 'match.params', {});
    const task = props.tasks.find(v => v.id === +taskId);
    const { toggleDone } = props;

    console.log(task);

    return (
        <div>
            <div>
                <Link to={ `/category/${categoryId}` }>Go Back</Link>
            </div>
            <hr/>
            <br/>
            <ul>
                <li>Name: { task.name }</li>
                <li>Description: { task.description }</li>
                <li>Acceptance Criteria: { task.dod }</li>
                <li>Start Date: { task.startDate.toLocaleString() }</li>
                <li>End Date: { task.endDate.toLocaleString() }</li>
                <li>Done: <input type="checkbox" checked={ task.isDone }
                                 onChange={ ev => toggleDone(task.id, ev.target.checked) }
                /></li>
                <Link to={ `/category/${categoryId}/task/${taskId}/edit`}>
                    Edit
                </Link>
            </ul>
        </div>
    );
};

TaskDescription.propTypes = {
    toggleDone: PropTypes.func.isRequired
};