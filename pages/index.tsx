import { GetStaticPropsContext } from 'next';

export { default } from 'containers/home';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/home/${locale}.json`)).default,
    },
  };
}
