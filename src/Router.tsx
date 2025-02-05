import { Countries, Country } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Countries />} index />
            <Route path="/:countryCode/:countryName" element={<Country />} />
         </Routes>
      </BrowserRouter>
   );
};
