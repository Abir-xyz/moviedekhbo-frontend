import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home, PrivateRoute, Error } from './pages/index';

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
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
