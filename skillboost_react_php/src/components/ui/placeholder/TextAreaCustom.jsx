import React from 'react';
import styled from 'styled-components';

const TextAreaCustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.5rem;
`;

const TextAreaCustomWrapper = styled.div`
  flex: 1;
  position: relative;
  width: 100%; /* Set width to 100% */
  max-width: 100%; /* Ensure it doesn't exceed the screen width */
  min-width: 488px;
  border-radius: 0.5rem;
  background-color: #FAFAFA;
  min-height: 100px;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) =>
    props.variant === 'Error' ? '#FF4141' : '#F8F8F8'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  &:focus-within {
    border-color: ${(props) =>
      props.variant === 'ReadOnly' ? '#F8F8F8' : '#DFDFDF'};
  }
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

const TextAreaCustomInput = styled.textarea`
  flex: 1;
  background: transparent;
  outline: none;
  border: none;
  resize: none;
  width: 100%; /* Set width to 100% */
`;

const TextAreaCustom = ({ variant, previewText, title, note, leftIcon, rightIcon, readOnly, ...rest }) => {
  return (
    <TextAreaCustomContainer>
      {title && <Title>{title}</Title>}
      <TextAreaCustomWrapper variant={variant}>
        <TextAreaCustomInput
          placeholder={previewText}
          readOnly={variant === 'ReadOnly'}
          {...rest}
        />
      </TextAreaCustomWrapper>
      {note && <Note variant={variant}>{note}</Note>}
    </TextAreaCustomContainer>
  );
};

export default TextAreaCustom;
