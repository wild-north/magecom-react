import React from 'react';
import { Redirect } from 'react-router-dom';
import { get } from 'lodash';
import { Link, withRouter } from 'react-router-dom';

export const Tasks = withRouter((props) => {
    const id = +get(props, 'match.params.id', null);

    if (isNaN(id)) {
        return <Redirect to="/"/>
    }

    const tasks = props.tasks.filter(v => v.category === id);

    return (
        <div>
            Tasks for category with id={ id }
            { tasks.map((task, index) => (
                <div key={index}>
                    <Link to={ `/category/${id}/task/${task.id}` }>
                        { task.id }: { task.name }
                    </Link>
                </div>
            )) }
        </div>
    );
});
