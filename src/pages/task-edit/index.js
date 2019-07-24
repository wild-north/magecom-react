import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';

export const TaskEdit = (props) => {
    console.log(props);
    const { taskId, categoryId } = get(props, 'match.params', {});
    const task = props.tasks.find(v => v.id === +taskId);

    return (
        <div>
            Место для вашего Эдита
            <div>
                <button onClick={ () => props.history.goBack() }>Cancel</button>
            </div>
        </div>
    );
};
