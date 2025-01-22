import { Stack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function NewsletterCardContent({ children }: Props): JSX.Element {
  return (
    <Stack flexGrow="1" justifyContent="space-between" spacing="4">
      {children}
    </Stack>
  );
}

export type NewsletterCardContentProps = Props;
