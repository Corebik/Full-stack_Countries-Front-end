import { CountryContext } from '@/context/CountryContext';
import { useContext } from 'react';

export const useCountry = () => {
   const context = useContext(CountryContext);

   if (!context) throw new Error('useCountry must be used within an CountryProvider');

   return context;
};
