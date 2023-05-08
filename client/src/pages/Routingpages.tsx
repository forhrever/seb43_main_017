import { Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';
import NotFound from 'src/components/NotFound';
import MainPage from './MainPage';
import Playlist from 'src/components/playlist/Playlist';
import Mixing from 'src/components/mixing/Mixing';
import Mypage from 'src/components/mypage/Mypage';
import Musiclist from 'src/components/musiclist/Musiclist';

function RoutingPages() {
    return (
        <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/mixing" element={<Mixing />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/musiclist" element={<Musiclist />} />
            <Route path="/musicdetail" element={<MusicDetail />} />
        </Routes>
    );
}

export default RoutingPages;