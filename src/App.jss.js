const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles(({ palette }) => ({
  container: {
    maxWidth: 1440,
    width: '100%',
    margin: '0 auto',
    padding: '10px 30px'
  },
  header: {
    display: 'flex',
    justifyContent: 'center'
  },
  link: {
    margin: '0 20px',
    padding: '5px 10px',
    fontWeight: 500,
    fontSize: 20,
    color: palette.white,
    textDecoration: 'none',
    backgroundColor: palette.green,
    borderRadius: 10,
    transition: '0.3s',
    '&:hover': {
      backgroundColor: palette.darkGreen
    }
  }
}));

export default useStyles;
