import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import ChevronDown from '../../icons/Arrow/ChevronDown';

const DropdownButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  gap: 0.5rem;
  width: 100%;
`;

const DropdownButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 350px;
  height: auto;
  border-radius: 0.5rem;
  background-color: #FAFAFA;
  color: #5E6A6E;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) =>
    props.variant === 'Error' ? '#FF4141' : '#F8F8F8'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:focus-within {
    border-color: ${(props) =>
      props.variant === 'ReadOnly' ? '#F8F8F8' : '#DFDFDF'};
  }
`;

const DropdownButtonComponent = styled.button`
  flex: 1;
  background: #FAFAFA;
  outline: none;
  border: none;
  width: 100%;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  text-align: left;
  text-overflow: ellipsis;
`;

const OptionsList = styled.ul`
  position: absolute;
  top: ${(props) => props.top + 8}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  background-color: #FFFFFF;
  border: 1px solid #DFDFDF;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  list-style: none;
  z-index: 1000;
`;

const Option = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #F6F6F6;
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
    props.variant === 'Error' ? '#FF4141' : '#5E6A6E'};
`;

const DropDownOptions = ({
  variant,
  id,
  title,
  note,
  options,
  onChange,
  readOnly,
  previewText,
  selectedOption,
  setSelectedOption,
  showRedAsterisk,
  children,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(null);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
      const rect = buttonRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      setButtonPosition({ top: rect.bottom + scrollTop, left: rect.left + scrollLeft });
    }
  }, [buttonRef]);

  const toggleOptions = () => {
    if (!rest.disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <DropdownButtonContainer>
      {title && (
        <Title showRedAsterisk={showRedAsterisk}>{title}</Title>
      )}
      <DropdownButtonWrapper
        variant={variant}
        onClick={toggleOptions}
        ref={buttonRef}
        disabled={variant === 'ReadOnly'}
      >
        <DropdownButtonComponent
          type="button"
          readOnly={variant === 'ReadOnly'}
          {...rest}
          disabled={variant === 'ReadOnly'}
        >
          {selectedOption || previewText}
          {children}
        </DropdownButtonComponent>
        {!rest.disabled && variant !== 'ReadOnly' && <ChevronDown />}
      </DropdownButtonWrapper>
      {isOpen && (
        <OptionsList top={buttonPosition.top} left={buttonPosition.left} width={buttonWidth}>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </OptionsList>
      )}
      {note && <Note variant={variant}>{note}</Note>}
    </DropdownButtonContainer>
  );
};

export default DropDownOptions;