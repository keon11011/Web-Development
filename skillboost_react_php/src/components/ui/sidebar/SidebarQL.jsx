import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import SkillboostLogo from '../../../assets/logo/SkillboostLogo.svg';
import HamburgerLg from '../../icons/Menu/HamburgerLg';

import ChartLine from '../../icons/Interface/ChartLine';
import Users from '../../icons/User/Users';
import User03 from '../../icons/User/User03';
import Tag from '../../icons/Interface/Tag';
import Notebook from '../../icons/File/Notebook';

const SidebarContainer = styled.div`
position: sticky;
top: 0px;
height: 100vh;
background-color: transparent;
  width: 232px;
  height: 100vh;
  border-right: 1px solid #dee2e6;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '232px' : '72px')};
    overflow: hidden;
  }
`;

const LogoContainer = styled.div`
  padding: 20px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  padding: 16px;
  gap: 16px;
  color: #5e6a6e;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #1a1f23;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: #5200ff;
  }

  &.active {
    color: #5200ff;
    font-weight: regular;
  }
`;

const MenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

const SidebarQL = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <SidebarContainer isOpen={isOpen}>
        <LogoContainer>
          <img src={SkillboostLogo} alt="Logo" />
        </LogoContainer>
        <nav>
          <StyledNavLink to="/dashboard" activeClassName="active" className="flex space-x-[16px]">
            <ChartLine strokeWidth={1.5}/>
            Dashboard
          </StyledNavLink>
          <StyledNavLink to="/lead/thongtin" activeClassName="active" className="flex space-x-[16px]">
            <Users strokeWidth={1.5}/>
            Lead
          </StyledNavLink>
          <StyledNavLink to="/khachhang" activeClassName="active" className="flex space-x-[16px]">
            <User03 strokeWidth={1.5}/>
            Khách hàng
          </StyledNavLink>
          <StyledNavLink to="/dsqdg g" activeClassName="active" className="flex space-x-[16px]">
            <Tag strokeWidth={1.5}/>
            Quy định giảm giá
          </StyledNavLink>
          <StyledNavLink to="/khoahocAdmin" activeClassName="active" className="flex space-x-[16px]">
            <Notebook strokeWidth={1.5}/>
            Khóa học
          </StyledNavLink>
        </nav>
      </SidebarContainer>

    </main>
  );
};

export default SidebarQL;
