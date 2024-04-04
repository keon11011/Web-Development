import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ChevronDown from '../../icons/Arrow/ChevronDown';

const DropdownButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  gap: 0.5rem;
`;

const DropdownButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 488px;
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
  cursor: pointer;
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
  cursor: pointer;
  text-align: left;
  overflow: hidden;
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
`;

const Note = styled.div`
  font-weight: medium;
  font-size: 0.875rem;
  color: ${(props) =>
    props.variant === 'Error' ? '#FF4141' : '#5E6A6E'};
`;

const DropDown = ({ variant, title, note, options, onChange, readOnly, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const buttonRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(null);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    }
  }, [buttonRef]);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <DropdownButtonContainer>
      {title && <Title>{title}</Title>}
      <DropdownButtonWrapper variant={variant} onClick={toggleOptions} ref={buttonRef}>
        <DropdownButtonComponent
          type="button"
          readOnly={variant === 'ReadOnly'}
          {...rest} 
        >
          {selectedOption || 'Choose an option'}
        </DropdownButtonComponent>
        <ChevronDown/>
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

export default DropDown;
