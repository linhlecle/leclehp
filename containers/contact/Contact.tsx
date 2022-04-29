import { useEffect, useRef, useState } from 'react';
import NextLink from 'next/link';

import { Flex, InputGroup, Box, Button, Link } from '@chakra-ui/react';
import { CheckedOffIcon, CheckedOnIcon } from 'components/@Icons/System';

import ButtonGroup from 'components/Checkbox/ButtonGroup';
import ButtonItem from 'components/Checkbox/Button';
import SubHeader from 'components/SubHeader';
import Calendar from 'components/Calendar';
import InputItem from './_fragment/InputItem';
import DetailItem from './_fragment/DetailItem';
import RangeSlider from 'containers/contact/_fragment/RangeSlider';
import FileUploader from './_fragment/FileUploader';

import { contactType1, contactType2, contactType2MapLang, contactType3, contactType4, projectTypeMapLang } from 'constants/contact';
import { BUDGET } from 'constants/budget';

import get from 'apis/Contact/GET';
import post from 'apis/Contact/POST';
import { postContactToGit } from 'apis/Contact/POST/postContactToGit';
import { useMutation, useQuery } from 'react-query';

import { formatDateToString } from 'utils/formatDateToString';
import { checker } from 'utils/checker';
import Toast from 'components/Toast';
import { convertMd } from 'utils/convertMd';
import { POLICY } from 'constants/policy';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

function Contact() {
  const t = useTranslations('Contact');
  const { locale } = useRouter();
  const { data: contactDetail } = useQuery(['contact_detail'], get.getContactDetail);
  const { data: projectType } = useQuery(['project_type'], get.getProjectType);
  const { mutateAsync } = useMutation(post.postContact);
  const { mutateAsync: fileUpload } = useMutation(post.postContactFile);
  const { mutateAsync: gitUpload } = useMutation(postContactToGit);

  const [type1, setType1] = useState<string>('');
  const [prevent, setPrevent] = useState<boolean>(false);
  const [type2, setType2] = useState<any[]>(contactType2(t));
  const [type3, setType3] = useState<any[]>(contactType3(t));
  const [detail, setDetail] = useState<string>('');
  const [files, setFiles] = useState<any | null>(null);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [budget, setBudget] = useState<string>(t('q6Text1'));
  const [checked, setChecked] = useState<boolean>(false);
  const [active, setActive] = useState<number>(0);
  const [companyName, setCompanyName] = useState<string>('');
  const [companyField, setCompanyField] = useState<string>('');
  const [customerPositions, setCustomerPositions] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [email, setEmail] = useState<string>(''); // user@example.com
  const [phone, setPhone] = useState<string>('');
  const [funnel, setFunnel] = useState<string | null>(null);
  const [isOpenByMarketingMedia, setIsOpenByMarketingMedia] = useState<boolean>(false);
  const [funnel2, setFunnel2] = useState<string>('');
  const [policy, setPolicy] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const detailRef = useRef<any>(null);

  const onClickType1 = (value: string) => {
    if (value === '아직 잘 모르겠어요') {
      setPrevent(true);
      detailRef.current.focus({ preventScroll: false });
      window.scrollTo({
        top: detailRef.current.offsetTop - 150,
        behavior: 'smooth',
      });
      setType1(value);
      setType2(type2.map((type) => ({ ...type, checked: false })));
      setType3(type3.map((type) => ({ ...type, checked: false })));
      setActive(0);
      setBudget(t('q6Checkbox'));
    } else {
      setPrevent(false);
      setType1(value);
      setBudget(t('q6Text1'));
    }
  };
  const onClickType2 = (id: number) => {
    const arr = type2?.map((type) => ({ id: type.id, checked: type.id === id ? !type.checked : type.checked, name: type.name }));
    setType2(arr);
  };
  const onClickType3 = (id: number) => {
    const arr = type3?.map((type) => ({ id: type.id, checked: type.id === id ? !type.checked : type.checked, name: type.name }));
    setType3(arr);
  };
  const onChangeDetail = (value: string) => setDetail(value);
  const onChangeFile = (files: File[]) => {
    const fullsize = [...files].map((v) => v.size).reduce((acc, cur) => acc + cur, 0);
    if (fullsize > 50 * 1024 * 1024) {
      setConfirmed(true);
      setMessage(t('fileSizeExceed'));
      setTimeout(() => setConfirmed(false), 2000);
    } else {
      setFiles(files);
    }
  };
  const onClickBudget = (index: number): void => {
    setActive(index);
    setBudget(BUDGET(t)[index]);
  };
  const onToggle = () => {
    if (checked) {
      setChecked(false);
      setBudget(t('q6Text1'));
      setActive(0);
    } else {
      setChecked(true);
      setBudget(t('q6Checkbox'));
    }
  };
  const onChangeCompanyName = (value: string) => setCompanyName(value);
  const onChangeCompanyField = (value: string) => setCompanyField(value);
  const onChangeCompanyPosition = (value: string) => setCustomerPositions(value);
  const onChangeCustomerName = (value: string) => setCustomerName(value);
  const onChangeEmail = (value: string) => setEmail(value);
  const onChangePhone = (value: string) => setPhone(value);
  const onclickType4 = (value: string) => {
    setFunnel(value);
    value === t('q8Btn7') ? setIsOpenByMarketingMedia(true) : setIsOpenByMarketingMedia(false);
    if (value === t('q8Btn7')) {
      setIsOpenByMarketingMedia(true);
    } else {
      setIsOpenByMarketingMedia(false);
      setFunnel2('');
    }
  };
  const onChangeMarketingMedia = (value: string) => setFunnel2(value);
  const onPolicy = () => setPolicy(!policy);

  const onSubmit = async () => {
    const data = {
      type1,
      type2: type2.filter((type) => type.checked).map((type) => ({ id: type.id })),
      type3: type3.filter((type) => type.checked).map((type) => ({ id: type.id })),
      detail,
      budget,
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
    };
    if (checker(data)) {
      setConfirmed(true);
      setMessage(checker(data));
      setTimeout(() => setConfirmed(false), 2000);
    } else {
      setLoading(true);
      try {
        if (files) {
          const datas = [...files].map(async (file) => {
            const formData = new FormData();
            formData.append('file', file);
            const response = await fileUpload(formData);
            const { id, file: url } = response;
            return { id, url };
          });
          const result = await Promise.all(datas);
          const ids = result.map((v) => v.id);
          const urls = result.map((v) => v.url);
          await mutateAsync({
            type1,
            contactDetailSet: data.type2,
            projectTypeSet: data.type3,
            detail,
            startDate: formatDateToString(startDate),
            endDate: formatDateToString(endDate),
            budget,
            companyName,
            companyField,
            customerPositions,
            customerName,
            email,
            phone,
            funnel: `${funnel}${funnel === t('q8Btn7') ? '-' + funnel2 : ''}`,
            files: ids,
          });
          // md
          await gitUpload({
            type1,
            email,
            detail: convertMd({
              type1,
              type2: type2
                .filter((type) => type.checked)
                .map((type) => type.name)
                .toString(),
              type3: type3
                .filter((type) => type.checked)
                .map((type) => type.name)
                .toString(),
              detail,
              startDate: formatDateToString(startDate),
              endDate: formatDateToString(endDate),
              budget,
              companyName,
              customerName,
              phone,
              companyField,
              customerPositions,
              email,
              funnel,
              funnel2,
              file: urls.toString(),
            }),
          });
        } else {
          // no file
          await mutateAsync({
            type1,
            contactDetailSet: data.type2,
            projectTypeSet: data.type3,
            detail,
            startDate: formatDateToString(startDate),
            endDate: formatDateToString(endDate),
            budget,
            companyName,
            companyField,
            customerPositions,
            customerName,
            email,
            phone,
            funnel: `${funnel}${funnel === t('q8Btn7') ? '-' + funnel2 : ''}`,
            files: [],
          });
          // md
          await gitUpload({
            type1,
            email,
            detail: convertMd({
              type1,
              type2: type2
                .filter((type) => type.checked)
                .map((type) => type.name)
                .toString(),
              type3: type3
                .filter((type) => type.checked)
                .map((type) => type.name)
                .toString(),
              detail,
              startDate: formatDateToString(startDate),
              endDate: formatDateToString(endDate),
              budget,
              companyName,
              customerName,
              phone,
              companyField,
              customerPositions,
              email,
              funnel,
              funnel2,
            }),
          });
        }
        setConfirmed(true);
        setMessage(t('inquirySent'));
        setTimeout(() => setConfirmed(false), 2000);
        // form reset
        setType1('');
        setPrevent(false);
        setType2(type2?.map((type) => ({ id: type.id, checked: false, name: type.name })));
        setType3(type3?.map((type) => ({ id: type.id, checked: false, name: type.name })));
        setDetail('');
        setFiles(null);
        setStartDate(new Date());
        setEndDate(new Date());
        setBudget(t('q6Text1'));
        setChecked(false);
        setActive(0);
        setCompanyName('');
        setCompanyField('');
        setCustomerName('');
        setCustomerPositions('');
        setEmail('');
        setPhone('');
        setFunnel('');
        setIsOpenByMarketingMedia(false);
        setFunnel2('');
        setPolicy(false);
      } catch (error: any) {
        const errorData = error?.response?.data || {};
        const errorMessage = Object.values(errorData).flat().join(' \n ');
        setConfirmed(true);
        setMessage(
          errorMessage.indexOf('이 유효하지 않은 선택(choice)입니다.') && locale === 'en'
            ? `${errorMessage.slice(0, errorMessage.lastIndexOf('"') + 1)} is an invalid choice.`
            : errorMessage,
        );
        setTimeout(() => setConfirmed(false), 2000);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    prevent ? setChecked(prevent) : setChecked(prevent);
  }, [prevent, setChecked]);

  useEffect(() => {
    const type2 = contactDetail?.map((type: any) => ({ ...type, name: locale === 'ko' ? type.name : contactType2MapLang[type.name], checked: false }));
    const type3 = projectType?.map((type: any) => ({ ...type, name: locale === 'ko' ? type.name : projectTypeMapLang[type.name], checked: false }));
    setType2(type2);
    setType3(type3);
  }, [contactDetail, projectType, locale]);
  return (
    <>
      <Toast confirmed={confirmed} message={message} />
      <SubHeader title={t('title')} subtitle={t('subTitle')} subtitle2={t('subTitle2')} />
      <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'}>
        <Flex flexDir={'column'} px={['16px', '120px', '100px']} w={'100%'} maxW={['100%', '100%', 'calc(100% - 200px)']}>
          <ButtonGroup title={t('q1')}>
            <Flex flexDir={'row'} flexWrap={'wrap'} mt={'10px'}>
              {contactType1(t).map(({ value, lang }, index, arr) => {
                const active = type1 === arr[index].value;
                return <ButtonItem key={index} value={lang} onClick={() => onClickType1(value)} active={active} />;
              })}
            </Flex>
          </ButtonGroup>
          <ButtonGroup title={t('q2')}>
            <Flex flexDir={'row'} flexWrap={'wrap'} mt={'10px'}>
              {type2?.map((type, index) => {
                const { id, name, checked } = type;
                return <ButtonItem key={index} value={name} onClick={() => onClickType2(id)} active={checked} prevent={prevent} />;
              })}
            </Flex>
          </ButtonGroup>
          <ButtonGroup title={t('q3')}>
            <Flex flexDir={'row'} flexWrap={'wrap'} mt={'10px'}>
              {type3?.map((type, index) => {
                const { id, name, checked } = type;
                return <ButtonItem key={index} value={name} onClick={() => onClickType3(id)} active={checked} prevent={prevent} />;
              })}
            </Flex>
          </ButtonGroup>
          <ButtonGroup title={t('q4')}>
            <DetailItem value={detail} onChange={(e) => onChangeDetail(e.target.value)} ref={detailRef} />
            <FileUploader files={files} onChange={(files) => onChangeFile(files)} />
          </ButtonGroup>
          <ButtonGroup title={t('q5')} mt={['80px', '80px', '100px']}>
            <Flex align={'center'} justify={'space-between'} mt={'20px'}>
              <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} prevent={prevent} />
            </Flex>
          </ButtonGroup>
          <ButtonGroup title={t('q6')} mt={['80px', '80px', '100px']}>
            <RangeSlider
              onClick={(index) => onClickBudget(index)}
              onToggle={() => onToggle()}
              checked={checked}
              budget={budget}
              setBudget={setBudget}
              prevent={prevent}
              active={active}
            />
          </ButtonGroup>
          <ButtonGroup title={t('q7')}>
            <Flex flexDir={['column', 'row', 'row']} gap={['0px', '65px', '65px']}>
              <InputGroup flexDirection={'column'} w={'100%'}>
                <InputItem name={t('q7Input1')} value={companyName} onChange={(e) => onChangeCompanyName(e.target.value)} />
                <InputItem name={t('q7Input3')} value={customerName} onChange={(e) => onChangeCustomerName(e.target.value)} />
                <InputItem name={t('q7Input5')} value={phone} onChange={(e) => onChangePhone(e.target.value)} />
              </InputGroup>
              <InputGroup flexDirection={'column'} w={'100%'}>
                <InputItem name={t('q7Input2')} value={companyField} onChange={(e) => onChangeCompanyField(e.target.value)} />
                <InputItem name={t('q7Input4')} value={customerPositions} onChange={(e) => onChangeCompanyPosition(e.target.value)} />
                <InputItem name={t('q7Input6')} value={email} onChange={(e) => onChangeEmail(e.target.value)} />
              </InputGroup>
            </Flex>
          </ButtonGroup>
          <ButtonGroup title={t('q8')}>
            <Flex flexDir={'row'} flexWrap={'wrap'} mt={'10px'}>
              {contactType4(t).map(({ value }, index, arr) => {
                const active = funnel === arr[index].value;
                return <ButtonItem key={index} value={value} onClick={() => onclickType4(value)} active={active} />;
              })}
            </Flex>
          </ButtonGroup>
          {isOpenByMarketingMedia && (
            <Flex flexDir={['column', 'row', 'row']} gap={['0px', '65px', '65px']}>
              <InputItem name={t('q8Btn7')} value={funnel2} placeholder={t('marketingMedia')} onChange={(e) => onChangeMarketingMedia(e.target.value)} />
              <Box w={'100%'} />
            </Flex>
          )}
          <Flex mt={['60px', '80px', '80px']} align={'center'} justify={['flex-start', 'center', 'center']}>
            <Flex align={'center'}>
              <Box mr={'5px'} onClick={onPolicy}>
                {policy ? (
                  <CheckedOnIcon marginTop={['4px', '4px', '2px']} w={['24px', '22.8px', '22.8px']} h={['24px', '22.8px', '22.8px']} />
                ) : (
                  <CheckedOffIcon marginTop={['4px', '4px', '2px']} w={['24px', '22.8px', '22.8px']} h={['24px', '22.8px', '22.8px']} />
                )}
              </Box>
              {t.rich('q8Checkbox', {
                // eslint-disable-next-line react/display-name
                box: (children) => (
                  <Box textStyle={'md'} ml={locale === 'en' ? '3px' : 0}>
                    <Box display={'inline'} textStyle={'md'} borderBottom={'1px solid black'}>
                      <NextLink href={POLICY} passHref>
                        <Link isExternal>
                          <a> {children}</a>
                        </Link>
                      </NextLink>
                    </Box>
                  </Box>
                ),
              })}
            </Flex>
          </Flex>
          <Flex mt={['60px', '30px', '30px']} align={'center'} justify={'center'}>
            <Button
              variant={'solid'}
              bg={'black'}
              border={'none'}
              w={['100%', '300px', '400px']}
              h={'50px'}
              _hover={{ bg: 'gray.800' }}
              _active={{ bg: 'gray.700' }}
              onClick={onSubmit}
              isLoading={loading}
              loadingText={t('submit')}
            >
              <Box color={'white'} textStyle={'md'} fontWeight={'700'}>
                {t('submit')}
              </Box>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Contact;
