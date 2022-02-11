import './App.css';
import Header from './components/Header/Header';
import PageContents from './components/PageContents/PageContents';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Profile />
      <PageContents />
    </div>
  );
}

export default App;
