import { Flex, Text } from '@chakra-ui/react';

type Props = {
  title?: string;
};

export function NewsletterCardCover({ title }: Props): JSX.Element {
  return (
    <Flex
      alignItems="center"
      background="#CECECE"
      height="200px"
      justifyContent="center"
      padding="2"
      width="full"
    >
      <Text textAlign="center" textStyle="text-newsletter-title">
        {title}
      </Text>
    </Flex>
  );
}
