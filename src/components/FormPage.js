import React from 'react';
import { Context } from '../App';
import Form from './Form';

import './FormPage.css';

const FormPage = () => {
  return (
    <Context.Consumer>
      {({ data, getFields, handleClick, error, deleteForm }) => (
        <div className="form-page">
          {data.map(form => 
            <Form key={form.id} form={form} getFields={getFields} deleteForm={deleteForm} />
          )}
          <button
            className="button"
            type="button"
            onClick={handleClick}
          >Добавить позицию</button>
          {error.length ? <div className="error">{error}</div> : null}
        </div>
      )
      }
    </Context.Consumer>
  )
};

export default FormPage;
