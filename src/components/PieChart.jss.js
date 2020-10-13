const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles({
  pieChart: {
    maxWidth: 600,
    width: '100%',
    margin: '0 auto',
    padding: '40px 0',
    textAlign: 'center'
  },
  chartLabel: {
    margin: 0,
    marginBottom: 20,
    minHeight: 43
  }
});

export default useStyles;
