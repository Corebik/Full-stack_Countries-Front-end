import '@/index.css';
import { Router } from '@/Router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CountryProvider } from './context/CountryProvider';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <CountryProvider>
         <Router />
      </CountryProvider>
   </StrictMode>,
);
