import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Login,
  Home,
  PrivateRoute,
  Desc,
  DescTv,
  Episodes,
  Contact,
  Error,
  Search,
} from './pages/index';
import { Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        /> */}
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='movie/:id' element={<Desc />} />
        <Route path='/tv/:id' element={<DescTv />} />
        <Route path='/tv/:id/season/:number' element={<Episodes />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
