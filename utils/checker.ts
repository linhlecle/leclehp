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
  t?: any;
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
  t,
}: CheckerType): string => {
  if (!type1) {
    return t('checkerInquiryType');
  } else if (
    type1 === '아직 잘 모르겠어요' &&
    (companyName === '' || companyField === '' || customerPositions === '' || customerName === '' || !emailRegExp.test(email) || !phoneRegExp.test(phone))
  ) {
    return t('checkerContactInformation');
  } else if (type1 !== '아직 잘 모르겠어요' && type2?.length === 0) {
    return t('checkerSelectInquiry');
  } else if (type1 !== '아직 잘 모르겠어요' && type2?.length !== 0 && type3?.length === 0) {
    return t('checkerProjectType');
  } else if (
    companyName === '' ||
    companyField === '' ||
    customerPositions === '' ||
    customerName === '' ||
    !emailRegExp.test(email) ||
    !phoneRegExp.test(phone)
  ) {
    return t('checkerContactInformation');
  } else if (!funnel) {
    return t('checkerFunnel');
  } else if (funnel === t('q8Btn7') && !funnel2) {
    return t('checkerMarketing');
  } else if (!policy) {
    return t('checkerPolicy');
  }
  return '';
};
