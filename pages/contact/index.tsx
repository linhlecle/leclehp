import { GetStaticPropsContext } from 'next';

export { default } from 'containers/contact';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
