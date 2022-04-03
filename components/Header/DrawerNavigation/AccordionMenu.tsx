import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Link, Flex } from '@chakra-ui/react';
import { NAVIGATION } from 'constants/navigation';
import { Fragment } from 'react';
import NextLink from 'next/link';
import { hoverStyle } from '../hoverStyle';
import { useTranslations } from 'next-intl';

function AccordionMenu() {
  const t = useTranslations('Navigation');
  return (
    <Accordion allowToggle>
      {NAVIGATION(t).map(({ ko, en, SUB_NAVIGATION }, index) => {
        return (
          <Fragment key={index}>
            <AccordionItem border={'none'}>
              <AccordionButton
                p={'0px'}
                w={'100%'}
                h={'60px'}
                _hover={{ bgColor: 'transparent' }}
                _focus={{ outline: 'none' }}
                borderBottom={'1px'}
                borderBottomColor={'gray.300'}
              >
                <Flex flexGrow={1} align={'center'} h={'100%'} textStyle={'md'} fontWeight={'400'} {...hoverStyle}>
                  {ko}
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              {SUB_NAVIGATION.map(({ ko: ko2, en: en2 }, index2) => {
                return (
                  <AccordionPanel key={index2} p={'0px'} w={'100%'} h={'60px'} cursor={'pointer'}>
                    <NextLink href={`${en}${en2}`} passHref>
                      <Link w={'100%'} h={'100%'}>
                        <Flex w={'100%'} h={'100%'} textStyle={'md'} color={'gray.700'} align={'center'} {...hoverStyle}>
                          {ko2}
                        </Flex>
                      </Link>
                    </NextLink>
                  </AccordionPanel>
                );
              })}
            </AccordionItem>
          </Fragment>
        );
      })}
    </Accordion>
  );
}

export default AccordionMenu;
