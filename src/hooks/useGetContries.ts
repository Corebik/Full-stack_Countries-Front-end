import { getContries, getContry } from '@/api/Country.api';
import { CountryItem } from '@/types';
import { useCountry } from './useCountry';

export const useGetCountries = () => {
   const { dispatch, state } = useCountry();

   const gettingCountries = async () => {
      dispatch({ type: 'loading' });

      try {
         const countries = await getContries();
         dispatch({ type: 'set-countries', payload: countries });
      } catch (error) {
         console.log(error);
      }
   };

   const gettingCountry = async ({ countryCode, name }: CountryItem) => {
      dispatch({ type: 'loading' });

      try {
         const country = await getContry({ countryCode, name });
         dispatch({ type: 'active-country', payload: country });
      } catch (error) {
         console.log(error);
         dispatch({ type: 'remove-country' });
      }
   };

   const cleanActiveCountry = () => {
      dispatch({ type: 'remove-country' });
   };

   return {
      //** Properties */
      state,
      //* Methods */
      gettingCountries,
      gettingCountry,
      cleanActiveCountry,
   };
};
