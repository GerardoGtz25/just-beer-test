import { Header, Logo, SecondaryNavBar, ActionBar, ActionButtons } from './ui';
import MainLogoImage from '../assets/MainLogoImage.svg';

export const NavBar = () => {
  return (
    <>
      <Header>
        <Logo src={MainLogoImage} alt='logo' />
        <ActionBar>
          <ActionButtons>
            <ion-icon name='search-outline' size='large'></ion-icon>
            Search
          </ActionButtons>
          <ActionButtons>
            <ion-icon name='book-outline' size='large'></ion-icon>
            Magazine
          </ActionButtons>
          <ActionButtons>
            <ion-icon name='power-outline' size='large'></ion-icon>
            Sign In
          </ActionButtons>
        </ActionBar>
      </Header>
      <SecondaryNavBar />
    </>
  );
};
