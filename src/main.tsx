import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import './index.css';
import './i18n/i18n.ts';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HeadProvider>
        <App />
      </HeadProvider>
    </BrowserRouter>
  </StrictMode>,
);
