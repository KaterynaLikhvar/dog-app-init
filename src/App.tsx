import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/organisms/Header';
import { MainPage } from './pages';

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Outlet />
    </>
  );
}

export default App;
