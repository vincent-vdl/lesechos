import { Flex } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function NewsletterLayout({ children }: Props): JSX.Element {
  return (
    <Flex marginX="auto" marginY="4" maxWidth="1024px" paddingX="4">
      {children}
    </Flex>
  );
}

export type NewsletterLayoutProps = Props;
