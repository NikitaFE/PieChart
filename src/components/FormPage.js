import React from 'react';
import { Context } from '../App';
import Form from './Form';

import useStyles from './FormPage.jss';

const FormPage = () => {
  const classes = useStyles();

  return (
    <Context.Consumer>
      {({ data, getFields, handleClick, error, deleteForm }) => (
        <div className={classes.formPage}>
          {data.map(form => 
            <Form key={form.id} form={form} getFields={getFields} deleteForm={deleteForm} />
          )}
          <button
            className={classes.button}
            type="button"
            onClick={handleClick}
          >Добавить позицию</button>
          {error.length ? <div className={classes.error}>{error}</div> : null}
        </div>
      )
      }
    </Context.Consumer>
  )
};

export default FormPage;
