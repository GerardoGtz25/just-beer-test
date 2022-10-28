import { NavBar } from './NavBar';

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <div className='row'>
          <div className='col-12'>{children}</div>
        </div>
      </div>
    </>
  );
};
