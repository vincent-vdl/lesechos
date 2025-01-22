import { Flex } from '@chakra-ui/react';
import React from 'react';

import { NewsletterCardBody } from './NewsletterCardBody';
import { NewsletterCardContent } from './NewsletterCardContent';
import { NewsletterCardCover } from './NewsletterCardCover';
import { NewsletterCardFooter } from './NewsletterCardFooter';

type Props = {
  children: React.ReactNode;
};

export function NewsletterCard({ children }: Props): JSX.Element {
  return <Flex direction="column">{children}</Flex>;
}

NewsletterCard.Cover = NewsletterCardCover;
NewsletterCard.Content = NewsletterCardContent;
NewsletterCard.Body = NewsletterCardBody;
NewsletterCard.Footer = NewsletterCardFooter;

export type NewsletterCardProps = Props;
