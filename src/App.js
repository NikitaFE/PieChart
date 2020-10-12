import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import './App.css';
import FormPage from './components/FormPage';
import PieChart from './components/PieChart';

export const Context = createContext();

const App = () => {
  const [error, setError] = useState('');
  const [data, setData] = useState([{
    id: Date.now().toString(),
    name: '',
    value: 0
  }]);

  const getFields = ({ name, value, id }) => {
    setData(
      data.map((form) => form.id === id
        ? { ...form, name, value }
        : form)
    );
  }

  const handleClick = () => {
    const isValid = validate(data);
    if (isValid < 0) {
      setError('');
      setData([
        ...data,
        {
          id: Date.now().toString(),
          name: '',
          value: 0
        }
      ])
    }
  };

  const validate = data => {
    let isValid;
    isValid = data.findIndex(({ name, value }) => !name.length || (value === 0 || value === ''));
    if (isValid >= 0) {
      setError('Заполните предыдущие поля!');
    } else {
      setError('');
    }
    return isValid;
  };

  const deleteForm = formId => {
    const newData = data.filter(({ id }) => id !== formId);
    setData(newData);
  }

  return (
    <Router>
      <Context.Provider value={{
        data,
        error,
        getFields,
        handleClick,
        deleteForm
      }}>
        <div className="container">
          <header className="header">
            <Link className="link" to="/">Form</Link>
            <Link className="link" to="/pie-chart">Pie Chart</Link>
          </header>
          <Switch>
            <Route exact path="/" component={FormPage} />
            <Route path="/pie-chart" component={PieChart} />
          </Switch>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
