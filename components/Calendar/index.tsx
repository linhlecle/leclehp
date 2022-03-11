import React, { useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import CustomHeader from 'components/Calendar/CustomHeader';
import CustomInput from 'components/Calendar/CustomInput';

import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

type CalendarProps = {
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
  prevent?: boolean;
};

function Calendar({ startDate, setStartDate, endDate, setEndDate, prevent }: CalendarProps) {
  const startCalendarRef = useRef<any>(null);
  const endCalendarRef = useRef<any>(null);
  const startInputRef = useRef<any>(null);
  const endInputRef = useRef<any>(null);

  const onClickStartInput = () => {
    // console.log('on click input');
  };
  const onClickEndInput = () => {
    // console.log('on click input');
  };
  const onCloseStartCalendar = () => {
    startCalendarRef.current.setOpen();
  };
  const onCloseEndCalendar = () => {
    endCalendarRef.current.setOpen();
  };

  return (
    <Wrap>
      {prevent ? (
        <CustomInput prevent={prevent} />
      ) : (
        <DatePicker
          ref={startCalendarRef}
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          showPopperArrow={false}
          shouldCloseOnSelect={false}
          selectsStart
          locale={ko}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          startDate={new Date()}
          customInput={<CustomInput value={startDate} onClick={onClickStartInput} ref={startInputRef} />}
          renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
            <CustomHeader date={date} decreaseMonth={decreaseMonth} increaseMonth={increaseMonth} />
          )}
        >
          <Flex
            align={'center'}
            justify={'flex-end'}
            h={'55px'}
            borderTop={'1px'}
            borderTopColor={'gray.300'}
            fontSize={'15px'}
            fontWeight={'700'}
            lineHeight={'27px'}
          >
            <Box p={'10px'} cursor={'pointer'} onClick={onCloseStartCalendar}>
              확인
            </Box>
          </Flex>
        </DatePicker>
      )}
      <Box px={'25px'} color={prevent ? 'gray.500' : 'black'}>
        ~
      </Box>
      {prevent ? (
        <CustomInput prevent={prevent} />
      ) : (
        <DatePicker
          ref={endCalendarRef}
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          showPopperArrow={false}
          shouldCloseOnSelect={false}
          selectsEnd
          locale={ko}
          dateFormat="yyyy-MM-dd"
          minDate={startDate}
          customInput={<CustomInput value={endDate} onClick={onClickEndInput} ref={endInputRef} />}
          renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
            <CustomHeader date={date} decreaseMonth={decreaseMonth} increaseMonth={increaseMonth} />
          )}
        >
          <Flex
            align={'center'}
            justify={'flex-end'}
            h={'50px'}
            borderTop={'1px'}
            borderTopColor={'gray.300'}
            fontSize={'15px'}
            fontWeight={'700'}
            lineHeight={'27px'}
          >
            <Box p={'10px'} cursor={'pointer'} onClick={onCloseEndCalendar}>
              확인
            </Box>
          </Flex>
        </DatePicker>
      )}
    </Wrap>
  );
}

const Wrap = styled(Flex)`
  display: flex;
  align-items: center;
  width: 100%;

  & .react-datepicker {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    width: 300px;
    height: fit-content;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(26, 26, 26, 0.1);
  }
  & .react-datepicker__header--custom {
    background: #ffffff;
    border: none;
  }
  & .react-datepicker__day-names,
  & .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }
  & .react-datepicker__day:hover::not(.react-datepicker__day--selected) {
    background-color: #f0f0f0;
  }
  & .react-datepicker__day-name {
    color: #808080;
    font-size: 12px;
    line-height: 18px;
    margin: 0px 15px;
  }
  & .react-datepicker__week {
    margin-top: 10px;
    font-size: 15px;
    line-height: 27px;
  }
  & .react-datepicker__day--selected {
    background: #0000f4;
    border-radius: 50%;
    font-weight: 700;
  }
  & .react-datepicker__day--keyboard-selected {
    background: #1a1a1a;
    border-radius: 50%;
    font-weight: 700;
  }
  & .react-datepicker__day--outside-month {
    visibility: hidden;
  }
`;

export default Calendar;
