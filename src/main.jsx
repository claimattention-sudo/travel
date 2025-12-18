// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Импортируем createRoot
import App from './App.jsx';

// Находим элемент root
const rootElement = document.getElementById('root');

// Создаем корень и рендерим приложение
if (rootElement) {
  const root = createRoot(rootElement); // ✅ Создаем корень
  root.render( // ✅ Используем метод render у корня
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}