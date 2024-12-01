import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import { Router } from './Router';

export const theme = createTheme({
  /** Put your mantine theme override here */
  primaryColor: 'blue'
});





export default function App() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="dark" />
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Router />
      </MantineProvider>
    </>
  );
}
