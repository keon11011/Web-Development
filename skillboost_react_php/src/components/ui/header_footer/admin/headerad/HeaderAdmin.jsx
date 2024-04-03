
import styled from 'styled-components';
import Notification from '../notification/Notification';
import avatar from '../../../../../assets/logo/avatar.svg'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transperant;
  height: 48px;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
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
      <PageTitle className='headline-medium'>{children}</PageTitle>
      <div>
        {progressBar}
      </div>
      <div>
        <UserInfo>
        <span className='title-medium text-text-secondary'>{getCurrentDate()}</span> {/* Current Date */}
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