import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './App.style';
import PageSearch from '../pages/PageSearch/PageSearch';
import PageCategory from '../pages/PageCategory/PageCategory';

export const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path='/category/:categoryId' element={<PageCategory />} />
        <Route path='/search' element={<PageSearch />} />
        <Route path='/' element={<PageSearch />} />
      </Routes>
    </Wrapper>
  );
};
