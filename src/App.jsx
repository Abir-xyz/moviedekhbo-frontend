import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home, PrivateRoute, Desc, DescTv, Error } from './pages/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='login' element={<Login />} />
        <Route path='movie/:id' element={<Desc />} />
        <Route path='/tv/:id' element={<DescTv />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
