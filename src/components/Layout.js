import { NavBar } from './NavBar';

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className='container'>{children}</div>
    </>
  );
};
