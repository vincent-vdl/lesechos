import { Stack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function NewsletterCardBody({ children }: Props): JSX.Element {
  return (
    <Stack
      alignItems="center"
      flexGrow="1"
      justifyContent="space-between"
      padding="1"
      spacing="4"
      textAlign="center"
    >
      {children}
    </Stack>
  );
}

export type NewsletterCardBodyProps = Props;
