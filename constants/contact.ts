type Type = {
  id: number;
  value: string;
  checked?: boolean;
};
type ContactType = Type[];

export const contactType1: ContactType = [
  {
    id: 1,
    value: '프로젝트 요청',
  },
  {
    id: 2,
    value: '사업제휴',
  },
  {
    id: 3,
    value: '기타문의',
  },
  {
    id: 4,
    value: '아직 잘 모르겠어요',
  },
];

export const contactType2: ContactType = [
  {
    id: 1,
    value: '웹사이트',
    checked: false,
  },
  {
    id: 2,
    value: '모바일 앱',
    checked: false,
  },
  {
    id: 3,
    value: '프로그램',
    checked: false,
  },
  {
    id: 4,
    value: 'ERP',
    checked: false,
  },
  {
    id: 5,
    value: '블록체인',
    checked: false,
  },
  {
    id: 6,
    value: 'QA',
    checked: false,
  },
  {
    id: 7,
    value: '데이터베이스',
    checked: false,
  },
  {
    id: 8,
    value: '게임',
    checked: false,
  },
  {
    id: 9,
    value: '임베디드',
    checked: false,
  },
  {
    id: 10,
    value: '기타',
    checked: false,
  },
];

export const contactType3: ContactType = [
  {
    id: 1,
    value: '프로토타입',
    checked: false,
  },
  {
    id: 2,
    value: 'MVP',
    checked: false,
  },
  {
    id: 3,
    value: '신규 구축',
    checked: false,
  },
  {
    id: 4,
    value: '리뉴얼',
    checked: false,
  },
  {
    id: 5,
    value: '유지보수',
    checked: false,
  },
  {
    id: 6,
    value: '컨설팅',
    checked: false,
  },
  {
    id: 7,
    value: '개발팀 협업',
    checked: false,
  },
  {
    id: 8,
    value: '기타',
    checked: false,
  },
];

export const contactType4: ContactType = [
  {
    id: 1,
    value: '기존 고객사',
  },
  {
    id: 2,
    value: '지인 소개',
  },
  {
    id: 3,
    value: '구글 검색',
  },
  {
    id: 4,
    value: '네이버 검색',
  },
  {
    id: 5,
    value: '카카오 검색',
  },
  {
    id: 6,
    value: '레클 임직원',
  },
  {
    id: 7,
    value: '마케팅 매체',
  },
  {
    id: 8,
    value: '기타',
  },
];
