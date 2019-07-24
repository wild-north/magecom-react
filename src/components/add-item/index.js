import React, { /*useRef,*/ useState } from 'react';
import * as styles from './style.module.css';
import PropTypes from 'proptypes';
import { noop } from 'lodash';

export const AddItem = ({ onAdd }) => {
    const [text, setText] = useState('');

    // const inputElement = useRef(null);

    const onSubmit = (ev) => {
        ev.preventDefault();

        onAdd(text);

        setText('');
    };

    return (
        <form className={ styles.form } onSubmit={onSubmit}>
            <input type="text"
                   className={ styles.input }
                   value={ text }
                   onChange={ ev => setText(ev.target.value) }
            />
            <button type="submit" className={ styles.button }>+</button>
        </form>
    );
};

AddItem.defaultProps = {
    onAdd: noop
};

AddItem.propTypes = {
    onAdd: PropTypes.func.isRequired
};