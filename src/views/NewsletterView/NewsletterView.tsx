import { Box, Button, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import { NewsletterCard, Separator } from '@lesechos/components';
import { useUser } from '@lesechos/hooks';
import { SiteNewsletters } from '@lesechos/types';

import { NewsletterViewLoading } from './loading';

type Props = {
  value: SiteNewsletters;
};

export function NewsletterView({ value }: Props): JSX.Element {
  const { user, loading } = useUser();

  if (loading || !user) {
    return <NewsletterViewLoading />;
  }

  const handleRegisterClick = (newsletterId: string): void => {
    /* ** Register logic ** */
    console.log(newsletterId);
  };

  const handleSubscribeClick = (newsletterId: string): void => {
    /* ** Subscribe logic ** */
    console.log(newsletterId);
  };

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
      {Object.keys(value).map((site) => (
        <Stack key={site} spacing="4">
          <Box>
            <Text fontWeight="700">{site}</Text>
            <Separator />
          </Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
            {value[site].map((item) => {
              const isRegister = item.subscriptions.some((subscription) =>
                user.subscriptions.includes(subscription),
              );

              return (
                <NewsletterCard key={item.id}>
                  <NewsletterCard.Cover title={item.title} />
                  <NewsletterCard.Content>
                    <NewsletterCard.Body>
                      <Text textAlign="center">{item.description}</Text>
                    </NewsletterCard.Body>
                    <NewsletterCard.Footer>
                      {isRegister ? (
                        <Button variant="primary" onClick={() => handleRegisterClick(item.id)}>
                          S’inscrire
                        </Button>
                      ) : (
                        <Button variant="secondary" onClick={() => handleSubscribeClick(item.id)}>
                          S’abonner
                        </Button>
                      )}
                    </NewsletterCard.Footer>
                  </NewsletterCard.Content>
                </NewsletterCard>
              );
            })}
          </SimpleGrid>
        </Stack>
      ))}
    </Stack>
  );
}

export type NewsletterViewProps = Props;
