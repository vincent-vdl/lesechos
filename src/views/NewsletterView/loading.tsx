import { Box, Button, SimpleGrid, Skeleton, SkeletonText, Stack, Text } from '@chakra-ui/react';

import { NewsletterCard, Separator } from '@lesechos/components';

type Props = unknown;

export function NewsletterViewLoading(): JSX.Element {
  return (
    <Stack spacing="4">
      <Stack background="#F4F4F4" padding="5" rounded="10px" textAlign="center">
        <Text as="h1" textStyle="text-heading" textTransform="uppercase">
          Newsletters
        </Text>
        <Text>
          Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques
          satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres
          d’intérêt et gérer plus facilement l’inscription à vos newsletters.
        </Text>
      </Stack>
      <Stack spacing="4">
        <Box>
          <Skeleton width="50px">
            <Text fontWeight="700">Site</Text>
          </Skeleton>
          <Separator />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {Array.from({ length: 9 }).map((_, i) => (
            <NewsletterCard key={i}>
              <Skeleton>
                <NewsletterCard.Cover />
              </Skeleton>
              <NewsletterCard.Content>
                <NewsletterCard.Body>
                  <SkeletonText
                    alignItems="center"
                    display="flex"
                    flexDir="column"
                    noOfLines={2}
                    skeletonHeight="5"
                    width="full"
                  />
                </NewsletterCard.Body>
                <NewsletterCard.Footer>
                  <Skeleton rounded="full">
                    <Button>S&apos;inscrire</Button>
                  </Skeleton>
                </NewsletterCard.Footer>
              </NewsletterCard.Content>
            </NewsletterCard>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}

export type NewsletterViewLoadingProps = Props;
