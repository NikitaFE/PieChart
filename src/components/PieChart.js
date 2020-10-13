import React, { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../App';
import { generateSlices, renderPathData } from '../helpers';

import useStyles from './PieChart.jss';

const PieChart = () => {
  const classes = useStyles();
  const { data } = useContext(Context);
  const slices = useState(generateSlices(data));
  const [label, setLabel] = useState('');
  const pathData = renderPathData(slices);

  const handleMouseEnter = target => {
    setLabel(target.dataset.name);
    target.style.opacity = 0.8
  };

  const handleMouseLeave = target => {
    setLabel('');
    target.style.opacity = 1
  };

  return (
    <Context.Consumer>
      {({ data }) => (
        <div className={classes.pieChart}>
          <h1 className={classes.chartLabel}>{data[0].value === 0 ? 'Нет данных' : label}</h1>
          <svg height="600" width="600"  viewBox="-1 -1 2 2" style={{transform: 'rotate(-90deg)'}}>
            {pathData.map(({ data, id, color, name }) => (
              <path
                key={id}
                xmlns="http://www.w3.org/2000/svg"
                d={data}
                fill={color}
                data-name={name}
                onMouseEnter={({target}) => handleMouseEnter(target)}
                onMouseLeave={({target}) => handleMouseLeave(target)}
              />
            ))}
          </svg>
        </div>
      )}
    </Context.Consumer>
  )
};

export default PieChart;
