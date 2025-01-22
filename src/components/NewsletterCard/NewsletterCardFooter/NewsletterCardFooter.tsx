import { Stack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function NewsletterCardFooter({ children }: Props): JSX.Element {
  return <Stack alignItems="center">{children} </Stack>;
}

export type NewsletterCardFooterProps = Props;
