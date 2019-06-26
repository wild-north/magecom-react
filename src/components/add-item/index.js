import React, { useRef } from 'react';
import * as styles from './style.module.css';
import PropTypes from 'proptypes';

export const AddItem = ({ onAdd }) => {
    const inputElement = useRef(null);

    const onSubmit = (ev) => {
        ev.preventDefault();

        onAdd(inputElement.value);
    };

    return (
        <form className={ styles.form } onSubmit={onSubmit}>
            <input type="text" ref={ inputElement } className={ styles.input }/>
            <button type="submit" className={ styles.button }>+</button>
        </form>
    );
};

AddItem.defaultProps = {
    onAdd: () => {}
};

AddItem.propTypes = {
    onAdd: PropTypes.func.isRequired
};