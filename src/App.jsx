import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home, PrivateRoute, Desc, Error } from './pages/index';

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
        <Route path='description' element={<Desc />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
