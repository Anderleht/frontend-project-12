import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import MainPage from './routes/MainPage';

const NotFound = () => {
  return (
      <div>
        <h1>404 - Страница не найдена</h1>
      </div>
  );
};

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;

