import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(({ palette }) => ({
  form: {
    marginBottom: 10
  },
  input: {
    margin: '0 10px 10px',
    padding: '5px 10px',
    borderRadius: 10,
    border: `2px solid ${palette.purple}`,
    outline: 'none',
    transition: '0.3s',
    '&:hover': {
      borderColor: palette.blue
    },
    '&:focus': {
      borderColor: palette.blue
    }
  },
  delete: {
    margin: 0,
    padding: 0,
    fontWeight: 600,
    fontSize: 20,
    color: palette.red,
    verticalAlign: 'middle',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    opacity: 0.7,
    transition: '0.3s',
    '&:hover': {
      opacity: 1,
      cursor: 'pointer'
    },
    '&:focus': {
      opacity: 1
    }
  }
}));

export default useStyles;
