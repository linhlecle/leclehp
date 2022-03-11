export const NAVIGATION = [
  {
    ko: '회사소개',
    en: '/company',
    SUB_NAVIGATION: [
      { ko: '레클소개', en: '' },
      { ko: '레클뉴스', en: '/news' },
    ],
  },
  {
    ko: '사업영역',
    en: '/business',
    SUB_NAVIGATION: [
      { ko: '컨설팅', en: '?type=1' },
      { ko: '구축', en: '?type=2' },
      { ko: '서비스', en: '?type=3' },
      { ko: '정부프로젝트', en: '?type=4' },
      { ko: 'IT 아카데미', en: '?type=5' },
    ],
  },
  {
    ko: '프로젝트',
    en: '/project',
    SUB_NAVIGATION: [
      { ko: '전체', en: '?tab=all' },
      { ko: '프로덕트', en: '?tab=product' },
      { ko: '비즈니스', en: '?tab=business' },
      { ko: '블록체인', en: '?tab=blockchain' },
      { ko: '아웃소싱', en: '?tab=outsourcing' },
    ],
  },
  {
    ko: '개발문의',
    en: '/contact',
    SUB_NAVIGATION: [{ ko: '문의하기', en: '' }],
  },
];
