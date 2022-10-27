import styled from 'styled-components';
import MainLogoImage from '../assets/MainLogoImage.svg';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #272a2c;
  height: auto;
  padding: 3px;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 150px;
  @media (min-width: 768px) {
    max-width: 180px;
  }
`;

export const NavBar = () => {
  return (
    <>
      <Header>
        <Logo src={MainLogoImage} alt='logo' />
      </Header>
    </>
  );
};
