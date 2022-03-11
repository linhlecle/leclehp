type Section = JSX.Element;
type HomeLayoutProps = {
  header: JSX.Element;
  children: Section[] | Section;
};

const HomeLayout = ({ header, children }: HomeLayoutProps) => {
  return (
    <>
      {header}
      {children}
    </>
  );
};

export default HomeLayout;
