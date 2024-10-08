import { Route, Routes } from 'react-router-dom';
import { BkVideo, Wrapper } from './App.style';
import PageSearch from '../pages/PageSearch/PageSearch.container';
import PageCategory from '../pages/PageCategory/PageCategory.container';
import { useEventBus } from '../events/bus.hooks';

export const App = () => {
  useEventBus();

  return (
    <Wrapper>
      <Routes>
        <Route path='/category/:categoryId' element={<PageCategory />} />
        <Route path='/search' element={<PageSearch />} />
        <Route path='/' element={<PageSearch />} />
      </Routes>
      <BkVideo
        crossOrigin='anonymous'
        playsInline
        muted
        src='https://videos.pexels.com/video-files/5818973/5818973-uhd_2560_1440_24fps.mp4'
        preload='metadata'
        autoPlay
        loop
      ></BkVideo>
    </Wrapper>
  );
};
