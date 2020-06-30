import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiLinks: {
      // The default props to change
      underlineHover: true,
    },
  },
});

function DefaultProps() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Change default props</Button>
    </ThemeProvider>
  );
}

export default DefaultProps;
