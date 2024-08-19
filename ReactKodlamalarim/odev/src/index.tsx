import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Odev from './pages/Odev';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const route =
  <BrowserRouter>
    <Routes>
      <Route path='/odev' element={<Odev />} />
    </Routes>
  </BrowserRouter>

root.render(route);

