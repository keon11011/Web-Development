import React from 'react';
import styled, { css } from 'styled-components';

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  gap: 0.5rem;
  width: 100%;
`;

const TextInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 350px;
  height: auto;
  border-radius: 0.5rem;
  background-color: #fafafa;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) =>
    props.variant === 'Error' ? '#ff4141' : '#f8f8f8'};
  display: flex;
  flex-direction: row;
  justify-content: center; //cai nay no effect
  align-items: center;
  &:focus-within {
    border-color: ${(props) =>
      props.variant === 'ReadOnly' ? '#f8f8f8' : '#dfdfdf'};
  }
`;

const IconWrapperRight = styled.span`
  margin-left: 0px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const IconWrapperLeft = styled.span`
  margin-right: 10px;
  margin-left: 0px;
  display: inline-flex;
  align-items: center;
`;

const TextInputComponent = styled.input`
  flex: 1;
  background: #FAFAFA;
  outline: none;
  border: none;
  width: 100%;
  color: #1a1f23;
  &::placeholder {
    visibility: ${(props) => (props.children ? 'hidden' : 'visible')};
  }
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
    props.variant === 'Error' ? '#ff4141' : '#5e6a6e'};
`;

const TextInput = ({
  variant,
  title,
  previewText,
  note,
  name,
  onChange,
  leftIcon,
  rightIcon,
  onClickRightIcon,
  readOnly,
  children,
  showRedAsterisk, // New prop to trigger showing the red asterisk
  ...rest
}) => {
  const handleClickRightIcon = () => {
    if (onClickRightIcon) {
      onClickRightIcon();
    }
  };

  return (
    <TextInputContainer>
      {title && (
        <Title showRedAsterisk={showRedAsterisk}>{title}</Title>
      )}
      <TextInputWrapper variant={variant}>
        {leftIcon && <IconWrapperLeft>{leftIcon}</IconWrapperLeft>}
        <TextInputComponent
          type="text"
          placeholder={previewText}
          value={children}
          name={name}
          onChange={onChange}
          readOnly={variant === 'ReadOnly'}
          {...rest}
        />
        {rightIcon && (
          <IconWrapperRight onClick={handleClickRightIcon}>
            {rightIcon}
          </IconWrapperRight>
        )}
      </TextInputWrapper>
      {note && <Note variant={variant}>{note}</Note>}
    </TextInputContainer>
  );
};

export default TextInput;