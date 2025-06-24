import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TaskPage from './components/pages/TaskPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route 
        path="/" 
        element={<Navigate to="/home" replace />} 
        />
        <Route 
        path="/home"
        element={<App />} 
        />
        <Route 
        path="/task"
        element={<TaskPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
