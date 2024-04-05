import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import Calendar from '../../icons/Calendar/Calendar'

// Styled components for the date picker
const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const DatePickerInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 488px;
  height: auto;
  border-radius: 0.5rem;
  background-color: #FAFAFA;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) =>
    props.variant === 'Error' ? '#FF4141' : '#F8F8F8'};
  display: flex;
  flex-direction: row;
  justify-content: between;
  align-items: center;
  &:focus-within {
    border-color: ${(props) =>
      props.variant === 'ReadOnly' ? '#F8F8F8' : '#DFDFDF'};
  }
`;

const DatePickerComponent = styled(DatePicker)`
  flex: 1;
  background: #FAFAFA;
  outline: none;
  border: none;
  width: 100%;
  text-align: left;
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

// Styled component for the right icon
const RightIcon = styled.span`
  margin-left: 10px; /* Adjust as needed */
  display: inline-flex;
  align-items: center;
`;

const CustomDatePicker = ({ variant, title, note, previewText, selectedDate, onChange, rightIcon: RightIconComponent, ...rest }) => {
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
        <RightIcon> <Calendar /> </RightIcon>
      </DatePickerInputWrapper>
      {note && <Note variant={variant}>{note}</Note>}
    </DatePickerWrapper>
  );
};

export default CustomDatePicker;
