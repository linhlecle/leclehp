import { emailRegExp, phoneRegExp } from 'constants/regexp';

type CheckerType = {
  type1?: string | null;
  type2?: any[];
  type3?: any[];
  detail?: string;
  startDate?: string;
  endDate?: string;
  budget?: string;
  companyName?: string;
  companyField?: string;
  customerPositions?: string;
  customerName?: string;
  email?: any;
  phone?: any;
  funnel?: string | null;
  funnel2?: string;
  policy?: boolean;
};

export const checker = ({
  type1,
  type2,
  type3,
  companyName,
  companyField,
  customerPositions,
  customerName,
  email,
  phone,
  funnel,
  funnel2,
  policy,
}: CheckerType): string => {
  if (!type1) {
    return '문의 유형을 선택하세요';
  } else if (
    type1 === '아직 잘 모르겠어요' &&
    (companyName === '' || companyField === '' || customerPositions === '' || customerName === '' || !emailRegExp.test(email) || !phoneRegExp.test(phone))
  ) {
    return '문의 정보를 형식에 맞게 입력하세요.';
  } else if (type1 !== '아직 잘 모르겠어요' && type2?.length === 0) {
    return '문의 내용을 선택하세요';
  } else if (type1 !== '아직 잘 모르겠어요' && type2?.length !== 0 && type3?.length === 0) {
    return '프로젝트 유형을 선택하세요';
  } else if (
    companyName === '' ||
    companyField === '' ||
    customerPositions === '' ||
    customerName === '' ||
    !emailRegExp.test(email) ||
    !phoneRegExp.test(phone)
  ) {
    return '문의 정보를 형식에 맞게 입력하세요';
  } else if (!funnel) {
    return '유입 경로를 선택하세요';
  } else if (funnel === '마케팅 매체' && !funnel2) {
    return '마케팅 매체를 입력하세요';
  } else if (!policy) {
    return '개인정보보호정책에 동의하세요';
  }
  return '';
};
