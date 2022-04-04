import { GetStaticPropsContext } from 'next';

export { default } from 'containers/company/news';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
}
