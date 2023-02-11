import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoute from './routes/MainRoute';
import SideBarRoute from './routes/SideBarRoute';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainRoute />
      <SideBarRoute />
    </BrowserRouter>
  );
}

export default App;
