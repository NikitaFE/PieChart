const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles(({ palette }) => ({
  formPage: {
    width: 500,
    margin: '0 auto',
    padding: '40px 0',
    textAlign: 'center'
  },
  button: {
    margin: 0,
    marginBottom: 10,
    padding: '5px 10px',
    font: 'inherit',
    fontWeight: 500,
    fontSize: 20,
    color: palette.white,
    backgroundColor: palette.blue,
    borderRadius: 10,
    border: 'none',
    outline: 'none',
    '&:hover': {
      backgroundColor: palette.darkBlue,
      cursor: 'pointer'
    },
    '&:focus': {
      backgroundColor: palette.darkBlue
    }
  },
  error: {
    width: 300,
    margin: '0 auto',
    padding: '5px 10px',
    fontWeight: 500,
    color: '#e74c3c',
    backgroundColor: 'rgba(231, 76, 60, 0.3)',
    borderRadius: 10
  }
}));

export default useStyles;
