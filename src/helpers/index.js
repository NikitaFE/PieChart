import { COLORS } from '../constants';

let cumulativePercent = 0;

const getCoordinatesForPercent = percent => {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
}

export const renderPathData = (slices) => {
  return slices.map(({ id, color, percent, name }) => {
    const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
    cumulativePercent += percent;
    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
    const largeArcFlag = percent > .5 ? 1 : 0;
    const pathData = [
      `M ${startX} ${startY}`, // Move
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
      `L 0 0`, // Line
    ].join(' ');
    
    return {
      data: pathData,
      id,
      color,
      name 
    };
  })
} 

const getRandomColor = colors => {
  return colors[Math.floor(Math.random() * colors.length)];
}

export const generateSlices = data => {
  const total = data.map(({value}) => value)
    .reduce((a, b) => +a + +b);
  const slices = data.map(({ name, value, id }) => (
    {
      percent: total > 0 ? value / total : 0,
      name, 
      color: getRandomColor(COLORS),
      id
    }
  ));

  return slices;
};
