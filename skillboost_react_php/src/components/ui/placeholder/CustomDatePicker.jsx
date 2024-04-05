import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import Calendar from '../../icons/Calendar/Calendar'

const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const DatePickerInputWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 350px;
  height: auto;
  border-radius: 0.5rem;
  background-color: #FAFAFA;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) =>
    props.variant === 'Error' ? '#FF4141' : '#F8F8F8'};
  display: flex;
  flex-direction: row;
  align-items: center;
  &:focus-within {
    border-color: ${(props) =>
      props.variant === 'ReadOnly' ? '#F8F8F8' : '#DFDFDF'};
  }
`;

const DatePickerComponent = styled(DatePicker)`
  background: #FAFAFA;
  outline: none;
  border: none;
  width: 100%;
`;

const Title = styled.div`
  font-weight: medium;
  font-size: 1rem;
  color: #5e6a6e;
`;

const Note = styled.div`
  font-weight: medium;
  font-size: 0.875rem;
  color: ${(props) =>
    props.variant === 'Error' ? '#FF4141' : '#5E6A6E'};
`;

const RightIcon = styled.span`
  display: inline-flex;
  align-items: center;
`;

const CustomDatePicker = ({ variant, title, note, previewText, selectedDate, onChange, ...rest }) => {
  // Use state to manage the selected date
  const [startDate, setStartDate] = useState(selectedDate);

  return (
    <DatePickerWrapper>
      {title && <Title>{title}</Title>}
      <DatePickerInputWrapper variant={variant}>
        <DatePickerComponent
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            // Pass the selected date to the parent component
            onChange(date);
          }}
          placeholderText={previewText}
          dateFormat="yyyy-MM-dd"
          variant={variant}
          {...rest}
        />
        <RightIcon> <Calendar stroke='#5E6A6E' width="1.25em" height="1.25em"/> </RightIcon>
      </DatePickerInputWrapper>
      {note && <Note variant={variant}>{note}</Note>}
    </DatePickerWrapper>
  );
};

export default CustomDatePicker;