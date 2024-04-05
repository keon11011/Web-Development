// datepicker.jsx
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled, { css } from 'styled-components';
import Calendar from '../../icons/Calendar/Calendar';

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
  ${(props) =>
    props.showRedAsterisk &&
    css`
      &:after {
        content: '*';
        color: #ff4141;
        margin-left: 0.25rem;
      }
    `}
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
  margin-left: auto;
`;

const CustomDatePicker = ({
  variant,
  title,
  note,
  previewText,
  onChange,
  selectedDate,
  setSelectedDate,
  showRedAsterisk,
  ...rest
}) => {
  return (
    <DatePickerWrapper>
      {title && (
        <Title showRedAsterisk={showRedAsterisk}>{title}</Title>
      )}
      <DatePickerInputWrapper variant={variant}>
        <DatePickerComponent
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            onChange && onChange(date);
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
