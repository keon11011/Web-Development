import styled from 'styled-components';
import Notification from '../notification/Notification';
import avatar from '../../../../../assets/logo/avatar.svg'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: transperant; /* Adjust background color */;
  height: 48px;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  color: ##5E6A6E;
`;

const Avatar = styled.span`
`;

// Header component
const HeaderAdmin = ({children, progressBar}) => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  return (
    <HeaderContainer>
      <PageTitle>{children}</PageTitle>
      <div>
        {progressBar}
      </div>
      <div>
        <UserInfo>
        <span>{getCurrentDate()}</span> {/* Current Date */}
        <Notification/>
        <Avatar >
            <img src={avatar} alt="Avt" />
            
        </Avatar> {/* Replace with actual user name */}
        </UserInfo>
      </div>
    </HeaderContainer>
  );
};


export default HeaderAdmin;