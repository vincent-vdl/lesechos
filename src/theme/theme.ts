import { ThemeOverride, extendTheme } from '@chakra-ui/react';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/700.css';

import { buttonTheme } from './components';
import { textStyles } from './textStyles';

export const theme: ThemeOverride = extendTheme({
  components: {
    Button: buttonTheme,
  },
  fonts: {
    body: 'Source Sans Pro, sans-serif',
  },
  textStyles,
});
