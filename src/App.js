import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import PageContents from './components/PageContents/PageContents';
import Profile from './components/Profile/Profile';
import Videos from './components/Videos/Videos';
import News from './components/News/News';
import Music from './components/Music/Music';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/videos' element={<Videos />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/dialogs' element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
