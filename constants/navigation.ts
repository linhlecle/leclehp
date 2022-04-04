export const NAVIGATION = (t: any) => [
  {
    ko: t('aboutUs'),
    en: '/company',
    SUB_NAVIGATION: [
      { ko: t('aboutLecle'), en: '' },
      { ko: t('lecleNews'), en: '/news' },
    ],
  },
  {
    ko: t('services'),
    en: '/business',
    SUB_NAVIGATION: [
      { ko: t('services'), en: '?type=1' },
      { ko: t('build'), en: '?type=2' },
      { ko: t('service'), en: '?type=3' },
      { ko: t('government'), en: '?type=4' },
      { ko: t('academy'), en: '?type=5' },
    ],
  },
  {
    ko: t('projects'),
    en: '/project',
    SUB_NAVIGATION: [
      { ko: t('all'), en: '?tab=all' },
      { ko: t('product'), en: '?tab=product' },
      { ko: t('business'), en: '?tab=business' },
      { ko: t('blockchain'), en: '?tab=blockchain' },
      { ko: t('outsourcing'), en: '?tab=outsourcing' },
    ],
  },
  {
    ko: t('development'),
    en: '/contact',
    SUB_NAVIGATION: [{ ko: t('inquiry'), en: '' }],
  },
];
