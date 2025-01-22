import { StyleObjectOrFn, SystemStyleObjectRecord } from '@chakra-ui/react';

const textNewsletterTitle: StyleObjectOrFn = {
  fontFamily: 'Merriweather, serif',
  fontWeight: 700,
  fontSize: '1.8rem',
  color: 'white',
  lineHeight: 1,
  filter: 'drop-shadow(1px 1px 10px 3px red)',
};

const textHeading: StyleObjectOrFn = {
  fontSize: '1.875rem',
  fontWeight: '700',
  color: '#212121',
};

export const textStyles: SystemStyleObjectRecord = {
  'text-newsletter-title': textNewsletterTitle,
  'text-heading': textHeading,
};
