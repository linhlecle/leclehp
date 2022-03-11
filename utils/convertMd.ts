type convertMdProps = {
  type1?: string;
  type2?: string;
  type3?: string;
  detail?: string;
  startDate?: string;
  endDate?: string;
  budget?: string;
  companyName?: string;
  companyField?: string;
  customerPositions?: string;
  customerName?: string;
  email?: string;
  phone?: string;
  funnel?: string | null;
  funnel2?: string;
  file?: string;
};

export const convertMd = ({
  type1,
  type2,
  type3,
  detail,
  startDate,
  endDate,
  budget,
  companyName,
  companyField,
  customerPositions,
  customerName,
  email,
  phone,
  funnel,
  funnel2,
  file,
}: convertMdProps) => {
  const md = `
## 문의 유형
${type1}


## 문의 내용
${type2}


## 프로젝트 유형
${type3}


## 상세 내용
${detail}


## 예상착수기간
${startDate} ~ ${endDate}


## 예산
${budget}


## 문의 정보


### 회사/단체명
${companyName}


### 담당자 성명
${customerName}


### 휴대폰 번호
${phone}


### 업종
${companyField}


### 직책
${customerPositions}


### 이메일
${email}


## 유입 경로
${funnel}${funnel === '마케팅 매체' ? '-' + funnel2 : ''}


${file ? `### 파일 URL` : ''}
${file ? file : ''}
`;

  return md;
};
