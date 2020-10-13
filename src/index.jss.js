import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    "*": {
      boxSizing: "border-box",
    },

    html: {
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif`,
    },

    body: {
      margin: 0,
      padding: 0,
    },

    code: {
      fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
    },
  },
});

export default useStyles;

