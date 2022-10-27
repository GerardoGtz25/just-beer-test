import { Routes, Route } from 'react-router-dom';
import { Home, Article } from '../pages';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='article' element={<Article />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </>
  );
};
