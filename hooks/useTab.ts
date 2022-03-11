import { useRouter } from 'next/router';
import { useEffect } from 'react';

type TabProps = (value: string) => void;

function useTab(setTab: TabProps) {
  const router = useRouter();

  const onClickTabButton = (tab: string) => {
    router.push(`${router.pathname}?tab=${tab}`);
  };

  useEffect(() => {
    const { tab } = router.query;
    if (tab) setTab(String(tab));
  }, [router, setTab]);

  return { onClickTabButton };
}

export default useTab;
