import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  background: '#B00005',
  color: 'white',
  padding: '8px 30px',
  rounded: '40px',
  fontWeight: '700',
  fontSize: '0.875rem',
  _hover: {
    filter: 'brightness(90%)',
  },
});

const secondary = defineStyle({
  background: '#FAEC70',
  color: '#212121',
  padding: '8px 30px',
  rounded: '40px',
  fontWeight: '700',
  fontSize: '0.875rem',
  _hover: {
    filter: 'brightness(90%)',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { primary, secondary },
});
