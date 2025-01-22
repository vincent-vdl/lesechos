import { NEWSLETTER_ITEMS } from 'data/newsletter-items';
import { GetStaticProps } from 'next';

import { NewsletterLayout } from '@lesechos/layouts';
import { SiteNewsletters } from '@lesechos/types';
import { NewsletterView } from '@lesechos/views';

type NewsletterPageProps = {
  siteNewsletters: SiteNewsletters;
};

export default function NewsletterPage({ siteNewsletters }: NewsletterPageProps): JSX.Element {
  return (
    <NewsletterLayout>
      <NewsletterView value={siteNewsletters} />
    </NewsletterLayout>
  );
}

export const getStaticProps: GetStaticProps<NewsletterPageProps> = async () => {
  const siteNewsletters: SiteNewsletters = NEWSLETTER_ITEMS.reduce((acc, cur) => {
    const { site } = cur;
    if (!acc[site]) {
      acc[site] = [];
    }
    acc[site].push(cur);

    return acc;
  }, {});

  return {
    props: {
      siteNewsletters,
    },
  };
};
