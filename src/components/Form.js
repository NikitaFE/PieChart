import React, { useState } from 'react';

import './Form.css';

const Form = ({ form, getFields, deleteForm }) => {
  const [fields, setFields] = useState(form);

  const handleBlur = () => {
    getFields(fields);
  }

  return (
    <form className="form">
      <input
        value={fields.name}
        name="name"
        type="text"
        onChange={({ target }) => setFields({...fields, name: target.value})}
        placeholder="Введите название"
        onBlur={handleBlur}
        className="input"
      />
      <input
        value={fields.value}
        name="value"
        type="number"
        onChange={({ target }) => {
          const value = target.value >= 0 ? target.value : 0;
          setFields({...fields, value});
        }}
        placeholder="Введите количество"
        onBlur={handleBlur}
        className="input"
      />
      <button
        type="button"
        className="delete"
        onClick={() => deleteForm(form.id)}
      >&times;</button>
    </form>
  )
};

export default Form;
