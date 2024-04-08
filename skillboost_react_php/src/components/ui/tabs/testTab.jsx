import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LeadInfoTabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  text-align: left;
  font-size: 1rem;
  color: #333333;
`;

const TabNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #FF0000; /* Hover color */
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #5200FF; /* Stroke color */
    height: 0.5rem;
    width: 0;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%; /* Expand stroke on hover */
  }
`;

const testTab = () => {
  return (
    <LeadInfoTabContainer>
      <TabNavLink to="/lead/thongtin">
        <div>
          Thông tin chung
        </div>
      </TabNavLink>
      <TabNavLink to="/lead/dsbaogia">
        <div>
          Báo giá
        </div>
      </TabNavLink>
      <TabNavLink to="/lead/dshoatdong">
        <div>
          Hoạt động
        </div>
      </TabNavLink>
    </LeadInfoTabContainer>
  );
};

export default testTab;