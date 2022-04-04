type Type = {
  id: number;
  value: string;
  checked?: boolean;
};
type ContactType = Type[];

export const contactType1 = (t: any) => [
  {
    id: 1,
    value: t('q1Btn1'),
  },
  {
    id: 2,
    value: t('q1Btn2'),
  },
  {
    id: 3,
    value: t('q1Btn3'),
  },
  {
    id: 4,
    value: t('q1Btn4'),
  },
];

export const contactType2MapLang = {
  웹사이트: 'Website',
  '모바일 앱': 'Mobile App',
  프로그램: 'Program',
  ERP: 'ERP',
  블록체인: 'Blockchain',
  QA: 'QA',
  데이터베이스: 'Database',
  게임: 'Game',
  임베디드: 'Embedded',
  기타: 'Others',
};

export const contactType2 = (t: any) => [
  {
    id: 1,
    value: t('q2Btn1'),
    checked: false,
  },
  {
    id: 2,
    value: t('q2Btn2'),
    checked: false,
  },
  {
    id: 3,
    value: t('q2Btn3'),
    checked: false,
  },
  {
    id: 4,
    value: t('q2Btn4'),
    checked: false,
  },
  {
    id: 5,
    value: t('q2Btn5'),
    checked: false,
  },
  {
    id: 6,
    value: t('q2Btn6'),
    checked: false,
  },
  {
    id: 7,
    value: t('q2Btn7'),
    checked: false,
  },
  {
    id: 8,
    value: t('q2Btn8'),
    checked: false,
  },
  {
    id: 9,
    value: t('q2Btn9'),
    checked: false,
  },
  {
    id: 10,
    value: t('q2Btn10'),
    checked: false,
  },
];

export const projectTypeMapLang = {
  MVP: 'MVP',
  '신규 구축': 'New Construction',
  리뉴얼: 'Renewal',
  유지보수: 'Maintenance',
  컨설팅: 'Consulting',
  '개발팀 협업': 'Development Team Collaboration',
  기타: 'Others',
  프로토타입: 'Prototype',
};

export const contactType3 = (t: any) => [
  {
    id: 1,
    value: t('q3Btn8'),
    checked: false,
  },
  {
    id: 2,
    value: t('q3Btn1'),
    checked: false,
  },
  {
    id: 3,
    value: t('q3Btn2'),
    checked: false,
  },
  {
    id: 4,
    value: t('q3Btn3'),
    checked: false,
  },
  {
    id: 5,
    value: t('q3Btn4'),
    checked: false,
  },
  {
    id: 6,
    value: t('q3Btn5'),
    checked: false,
  },
  {
    id: 7,
    value: t('q3Btn6'),
    checked: false,
  },
  {
    id: 8,
    value: t('q3Btn7'),
    checked: false,
  },
];

export const contactType4 = (t: any) => [
  {
    id: 1,
    value: t('q8Btn1'),
  },
  {
    id: 2,
    value: t('q8Btn2'),
  },
  {
    id: 3,
    value: t('q8Btn3'),
  },
  {
    id: 4,
    value: t('q8Btn4'),
  },
  {
    id: 5,
    value: t('q8Btn5'),
  },
  {
    id: 6,
    value: t('q8Btn6'),
  },
  {
    id: 7,
    value: t('q8Btn7'),
  },
  {
    id: 8,
    value: t('q8Btn8'),
  },
];
