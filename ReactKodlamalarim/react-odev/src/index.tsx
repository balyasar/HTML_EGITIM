import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import Hesap from './pages/Hesap';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchUser from './pages/SearchUser';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const route = (
  <BrowserRouter>
    <Routes>
      <Route path='/app' element={<App />} />
      <Route path='/hesap' element={<Hesap />} />
      <Route path='/search-user' element={<SearchUser />} />
    </Routes>
  </BrowserRouter>);

root.render(route);

